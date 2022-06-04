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

const iconColors = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
];

const iconColorMediumShades = [
  'red',
  'blue',
  'green',
  'orange',
  'purple',
];

const iconColorReds = [
  '#FA8072', '#DC143C', '#8B0000', // reds
];
const iconColorBlues = [
  '#87CEFA', '#1E90FF', '#0000CD', // blues
];
const iconColorGreens = [
  '#ADFF2F', '#3CB371', '#006400', // greens
];
const iconColorOranges = [
  '#F4A460', '#FFA500', '#8B4513', // oranges
];
const iconColorPurples = [
  '#DDA0DD', '#9932CC', '#4B0082'  // purples
];

// creates a new array of n random colorSets from a given list of colorSets
function getRandom(arr, n) {
  let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more colorSets taken than available");
  while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const selectRandomColorSets = (colorSetAmount) => {
  const allSets = [
    iconColorReds, iconColorBlues, iconColorGreens, iconColorOranges, iconColorPurples
  ];

  // console.log("allSets:", allSets)

  const selectedRandomColorSets = getRandom(allSets, colorSetAmount);

  let selectedColors = [];

  selectedRandomColorSets.forEach(element => selectedColors.push(...element));

  return selectedColors;
}


const getIconForElement = (element) => {
  const iconIndex = element % icons.length;
  return icons[iconIndex];
};


const selectColorSets = (level) => {
  let result = [];
  let colorSetCount = 0;

  if (level >= 0 && level <= 5) {
    result.push(...iconColorMediumShades);
  };

  if (level >= 6) {
    if (level >= 6 && level <= 10)
      colorSetCount = 1;
    if (level >= 11 && level <= 15)
      colorSetCount = 1;
  
    result.push(...selectRandomColorSets(colorSetCount));
  };

  // console.log("selectedColors", result);
  // console.log("selectedColors.length", result.length);

  return result;
}

const getColorForElement = (element, selectedColorSets) => {
  
  const colorIndex = Math.floor(element / selectedColorSets.length);

  return selectedColorSets[colorIndex];
};

const CardElement = ({ element, location }) => {
  const Icon = getIconForElement(element);
  const level = useStoreSlices((state) => state.level);
  let selectedColorSets = [];

  selectedColorSets.push(...selectColorSets(level));

  // console.log("selectedColorSets", selectedColorSets)

  return (
    <>
    <div className={styles.CardElement} style={{ gridArea: location }}>
      <Icon style={{ fill: getColorForElement(element, selectedColorSets) }} />
    </div>
    </>
  );
};

export { CardElement, iconsLength };
