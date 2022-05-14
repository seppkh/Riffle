import styles from './CardElement.module.css';
import { ReactComponent as IconBalloon } from '../assets/icons/balloon.svg';

const CardElement = ({ element, location }) => {
  return (
    <div className={styles.CardElement} style={{ gridArea: location }}>
      <IconBalloon />
    </div>
  );
};

export default CardElement;
