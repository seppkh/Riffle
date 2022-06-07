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
import useStoreSlices from '../store/rootSliceStore';

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

const iconsLength = icons.length;

export { icons, iconsLength };


// Move icons and iconColors to separate files
// import icons, iconsLength and iconColors to components
// move selectColorSetsFunc() to separate file from CardElement.js


// in CardLayout, finish setColorForEachElement()
// move previous setColorForEachElement() to separate file