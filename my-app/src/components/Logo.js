import styles from './Logo.module.css';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.Logo} src={logo} alt='Logo' />
    </div>
  );
};

export default Logo;
