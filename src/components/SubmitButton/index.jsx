import styles from "./index.module.css";

export const SubmitButton = ({ text }) => {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
};
