import styles from './CardElement.module.css';
import { ReactComponent as IconBalloon } from '../assets/icons/balloon.svg';
import { ReactComponent as IconBasketball } from '../assets/icons/basketball.svg';
// import { ReactComponent as IconPc } from '../assets/icons/pc.svg';
import { ReactComponent as IconBucket } from '../assets/icons/bucket.svg';
import { ReactComponent as IconDishwasher } from '../assets/icons/dishwasher.svg';
// import { ReactComponent as IconUsb } from '../assets/icons/usb.svg';
import { ReactComponent as IconFootball } from '../assets/icons/football.svg';
import { ReactComponent as IconFork } from '../assets/icons/fork.svg';
import { ReactComponent as IconHeadphones } from '../assets/icons/headphones.svg';
import { ReactComponent as IconJoystick } from '../assets/icons/joystick.svg';
import { ReactComponent as IconKeyboard } from '../assets/icons/keyboard.svg';
import { ReactComponent as IconLadder } from '../assets/icons/ladder.svg';
import { ReactComponent as IconLaptop } from '../assets/icons/laptop.svg';
import { ReactComponent as IconLoudspeaker } from '../assets/icons/loudspeaker.svg';
import { ReactComponent as IconMagic } from '../assets/icons/magic.svg';
import { ReactComponent as IconMicrowave } from '../assets/icons/microwave.svg';
import { ReactComponent as IconMop } from '../assets/icons/mop.svg';
import { ReactComponent as IconMouse } from '../assets/icons/mouse.svg';
import { ReactComponent as IconOven } from '../assets/icons/oven.svg';
import { ReactComponent as IconPaintbrush } from '../assets/icons/paintbrush.svg';
import { ReactComponent as IconPC } from '../assets/icons/pc.svg';
import { ReactComponent as IconPlunger } from '../assets/icons/plunger.svg';
import { ReactComponent as IconPrinter } from '../assets/icons/printer.svg';
import { ReactComponent as IconRake } from '../assets/icons/rake.svg';
import { ReactComponent as IconShovel } from '../assets/icons/shovel.svg';
import { ReactComponent as IconToothbrush } from '../assets/icons/toothbrush.svg';
import { ReactComponent as IconTreelog } from '../assets/icons/treelog.svg';
import { ReactComponent as IconUSB } from '../assets/icons/usb.svg';
import { ReactComponent as IconVolleyball } from '../assets/icons/volleyball.svg';
import { ReactComponent as IconWebcam } from '../assets/icons/webcam.svg';

const icons = [
  IconBalloon,
  IconBasketball,
  // IconPc,
  IconBucket,
  IconDishwasher,
  // IconUsb,
  IconFootball,
  IconFork,
  IconHeadphones,
  IconJoystick,
  IconKeyboard,
  IconLadder,
  IconLaptop,
  IconLoudspeaker,
  IconMagic,
  IconMicrowave,
  IconMop,
   /*
  IconMouse,
  IconOven,
  IconPaintbrush,
  IconPC,
  IconPlunger,
  IconPrinter,
  IconRake,
  IconShovel,
  IconToothbrush,
  IconTreelog,
  IconUSB,
  IconVolleyball,
  IconWebcam, */
];

const iconColors = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
];

/*
'salmon',
  'red',
  'firebrick',
  'lightblue',
  'dodgerblue',
  'mediumblue',
  'greenyellow',
  'mediumseagreen',
  'green',
  'sandybrown',
  'orange',
  'saddlebrown',
  'violet',
  'darkorchid',
  'indigo',
*/

/*
  '#FA8072', '#DC143C', '#8B0000', // reds
  '#87CEFA', '#1E90FF', '#0000CD', // blues
  '#ADFF2F', '#3CB371', '#006400', // greens
  '#F4A460', '#FFA500', '#8B4513', // oranges
  '#DDA0DD', '#9932CC', '#4B0082'  // purples
*/

const getIconForElement = (element) => {
  const iconIndex = element % 5;
  return icons[iconIndex];
};

const getColorForElement = (element) => {
  const colorIndex = Math.floor(element / 5);
  return iconColors[colorIndex];
};

const CardElement = ({ element, location }) => {
  const Icon = getIconForElement(element);

  return (
    <>
    <div className={styles.CardElement} style={{ gridArea: location }}>
      <Icon style={{ fill: getColorForElement(element) }} />
    </div>
    </>
  );
};

export default CardElement;
