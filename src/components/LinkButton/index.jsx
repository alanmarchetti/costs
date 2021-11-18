import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const LinkButton = ({ to, text }) => (
  <Link className={styles.btn_link} to={to}>
    {text}
  </Link>
);
