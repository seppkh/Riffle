import styles from './Button.module.css';

const Button = ({ label, handleClick }) => {
  return (
    <button className={styles.Button} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
