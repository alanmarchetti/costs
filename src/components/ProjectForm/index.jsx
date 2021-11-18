import { useState, useEffect } from "react";
import { Input } from "../Inputs";
import { Select } from "../Select";
import { SubmitButton } from "../SubmitButton";
import styles from "./index.module.css";

export const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || []);

  const getCategories = () => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const submitProject = (event) => {
    event.preventDefault();
    handleSubmit(project);
  };

  const handleInput = (event) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const handleSelect = (event) => {
    setProject({
      ...project,
      category: {
        id: event.target.value,
        name: event.target.options[event.target.selectedIndex].text,
      },
    });
  };

  return (
    <form onSubmit={submitProject} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handelOnchange={handleInput}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handelOnchange={handleInput}
        value={project.budget ? project.budget : ""}
      />
      <Select
        name="category_id"
        text="Selecione uma categoria"
        options={categories}
        handelOnchange={handleSelect}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
};
