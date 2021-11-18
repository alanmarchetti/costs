import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Message } from "../../components/Message";
import { Container } from "../../components/Container";
import { LinkButton } from "../../components/LinkButton";
import { ProjectCard } from "../../components/ProjectCard";
import { Loading } from "../../components/Loading";

import styles from "./Projects.module.css";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoader, setRemoveLoader] = useState(false);
  const [projectMessenger, setProjectMessenger] = useState("");
  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  const getAllProjects = () => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setRemoveLoader(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  const removeProject = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessenger("Projeto removido com sucesso");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Crie seu projeto" />
      </div>
      {message && <Message type="success" message={message} />}
      {projectMessenger && (
        <Message type="success" message={projectMessenger} />
      )}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoader && <Loading />}
        {removeLoader && projects.length === 0 && (
          <p>Não há projetos cadastrados :(</p>
        )}
      </Container>
    </div>
  );
};
