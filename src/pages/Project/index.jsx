import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Loading } from "../../components/Loading";
import { Container } from "../../components/Container";
import { ProjectForm } from "../../components/ProjectForm";
import { Message } from "../../components/Message";

import styles from "./index.module.css";

export const Project = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  // projeto que esta no banco sendo resgatado a partir da url
  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((error) => console.log(error));
    }, 1000);
  }, [id]);

  const editPost = (project) => {
    setMessage("");

    // -> rota para atualizar
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setShowProjectForm(false);
        setMessage("Projeto atualizado!");
        setType("success");
      })
      .catch((error) => console.log(error));
  };

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  return (
    <>
      {projects.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} message={message} />}
            <div className={styles.details_container}>
              <h1>Projeto: {projects.name}</h1>
              <button onClick={toggleProjectForm} className={styles.btn}>
                {!showProjectForm ? `Editar projeto` : `Fechar`}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria: </span> {projects.category.name}
                  </p>
                  <p>
                    <span>Orçamento: </span> R${projects.budget}
                  </p>
                  <p>
                    <span>Total utilizado: </span> R${projects.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Finalizar edição"
                    projectData={projects}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
