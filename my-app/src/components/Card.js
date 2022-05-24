import styles from './Card.module.css';
import { useMemo } from 'react';
import CardElement from './CardElement';
import clsx from 'clsx';

const getRandomIndexOfArray = (input) => {
  const randomIndex = Math.floor(Math.random() * input.length);
  return randomIndex;
};

const Card = ({ elements, isMain }) => {
  const elementLocations = useMemo(() => {
    let locations = 'abcdefghijkl'.split('');
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
      <CardElement key={element} element={element} location={elementLocation} />
    );
  };
  return (
    <div className={clsx(styles.Card, { [styles.isLarge]: isMain })}>
      {elements.map(renderElement)}
    </div>
  );
};

export default Card;
