import styles from "./Home.module.css";
import { LinkButton } from "../../components/LinkButton";
import imgSavings from "../../images/savings.svg";

export const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>
        {" "}
        Bem vindo ao <span> Costs </span>
      </h1>
      <p> Gerencie seus projetos de forma simples e fácil!</p>
      <LinkButton to="/newproject" text="Crie seu projeto" />
      <img src={imgSavings} alt="Costs" />
    </section>
  );
};
