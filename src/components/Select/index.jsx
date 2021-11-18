import styles from "./index.module.css";

export const Select = ({ text, handelOnchange, name, options, value }) => {
  return (
    <div className={styles.select_control}>
      <label htmlFor={name}>{text}:</label>

      <select
        id={name}
        name={name}
        onChange={handelOnchange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>

        {options.map((categorie) => (
          <option value={categorie.id} key={categorie.id}>
            {categorie.name}
          </option>
        ))}
      </select>
    </div>
  );
};
