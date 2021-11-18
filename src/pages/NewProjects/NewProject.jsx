import { useHistory } from "react-router-dom";
import { ProjectForm } from "../../components/ProjectForm";
import styles from "./NewProject.module.css";

export const NewProject = () => {
  const history = useHistory();

  const createPost = (project) => {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push("/projects", { message: "Projeto criado com sucesso!" });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.new_project}>
      <h1>Criar um projeto</h1>
      <p>Crie seu projeto e adiocione seus serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
    </div>
  );
};
