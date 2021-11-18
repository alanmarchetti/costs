import styles from "./index.module.css";

export const Input = ({
  type,
  text,
  handelOnchange,
  name,
  placeholder,
  value,
}) => {
  return (
    <div className={styles.input_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handelOnchange}
        value={value}
      />
    </div>
  );
};
