import styles from "./index.module.css";
import loading from "./../../images/loading.svg";

export const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <img src={loading} alt="loading imagem" className={styles.loader} />
    </div>
  );
};
