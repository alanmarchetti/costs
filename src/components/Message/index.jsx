import { useState, useEffect } from "react";
import styles from "./index.module.css";

export const Message = ({ type, message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{message}</div>
      )}
    </>
  );
};
