import styles from "./Explanation.module.css";

const Explanation = ({ children }) => {
  return <article className={styles.Explanation}>{children}</article>;
};

export default Explanation;
