import styles from './CardElement.module.css';
import { ReactComponent as IconBalloon } from '../assets/icons/balloon.svg';
import { ReactComponent as IconBasketball } from '../assets/icons/basketball.svg';
import { ReactComponent as IconPc } from '../assets/icons/pc.svg';
import { ReactComponent as IconBucket } from '../assets/icons/bucket.svg';
import { ReactComponent as IconDishwasher } from '../assets/icons/dishwasher.svg';
import { ReactComponent as IconUsb } from '../assets/icons/usb.svg';
import { ReactComponent as IconFootball } from '../assets/icons/football.svg';
import { ReactComponent as IconFork } from '../assets/icons/fork.svg';
import { ReactComponent as IconHeadphones } from '../assets/icons/headphones.svg';
import { ReactComponent as IconJoystick } from '../assets/icons/joystick.svg';

const icons = [
  IconBalloon,
  IconBasketball,
  IconPc,
  IconBucket,
  IconDishwasher,
  IconUsb,
  IconFootball,
  IconFork,
  IconHeadphones,
  IconJoystick,
];

const iconColors = ['red', 'blue', 'green', 'orange', 'purple'];

const getIconForElement = (element) => {
  const iconIndex = element % 10;
  return icons[iconIndex];
};

const getColorForElement = (element) => {
  const colorIndex = Math.floor(element / 10);
  return iconColors[colorIndex];
};

const CardElement = ({ element, location }) => {
  const Icon = getIconForElement(element);

  return (
    <div className={styles.CardElement} style={{ gridArea: location }}>
      <Icon style={{ fill: getColorForElement(element) }} />
    </div>
  );
};

export default CardElement;
