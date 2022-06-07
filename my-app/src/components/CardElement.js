import styles from './CardElement.module.css';
import { icons } from './Icons.js';


const getIconForElement = (element) => {
  const iconIndex = element % icons.length;
  return icons[iconIndex];
};


// assign a color to every element. Then in CardElement fill read the assigned color for the element

const getColorForElement = (element, elementsColors) => {

  // console.log("element from CardElement.js:", element)
  // console.log("elementsColors from CardElement.js:", elementsColors)

  const elementColor = elementsColors[element];

  return elementColor;
};


const CardElement = ({ element, location, elementsColors }) => {
  const Icon = getIconForElement(element);

  // console.log("selectedColorSets", selectedColorSets)

  return (
    <>
    <div className={styles.CardElement} style={{ gridArea: location }}>
      <Icon style={{ fill: getColorForElement(element, elementsColors) }} />
    </div>
    </>
  );
};

export { CardElement };
