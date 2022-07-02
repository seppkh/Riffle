import styles from './Card.module.css';
import { useMemo } from 'react';
import { CardElement } from './CardElement';
import clsx from 'clsx';
import useStoreSlices from '../store/rootSliceStore';

const getRandomIndexOfArray = (input) => {
  const randomIndex = Math.floor(Math.random() * input.length);
  return randomIndex;
};

const Card = ({
  elements,
  isMain,
  onClick,
  elementsColors,
  isActive,
  isMatch,
}) => {
  // console.log(elements);

  const locationPoints = useStoreSlices((state) => state.locationPoints);

  const elementLocations = useMemo(() => {
    let locations = locationPoints.split('');
    const output = new Map();
    elements.forEach((element) => {
      // random index alljäänud locationitest
      const locationIndex = getRandomIndexOfArray(locations);
      // eemaldada locationitest selle indexiga elemendi
      const [location] = locations.splice(locationIndex, 1);
      // outputi lisada selle elemendi kohale locationi
      output.set(element, location);
    });

    return output;
  }, [elements]);

  const renderElement = (element) => {
    const elementLocation = elementLocations.get(element);
    return (
      <>
        <CardElement
          key={element}
          element={element}
          location={elementLocation}
          elementsColors={elementsColors}
        />
      </>
    );
  };

  return (
    <div
      onClick={() => {
        onClick?.(); //call on click if onclick is defined
      }}
      className={clsx(styles.Card, {
        [styles.isLarge]: isMain,
        [styles.isInvalid]: !isActive && !isMatch && !isMain,
      })}
    >
      <div>
        {elements.map(renderElement)}
      </div>
    </div>
  );
};

export default Card;
