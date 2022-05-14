import styles from './Card.module.css';
import { useMemo } from 'react';
import CardElement from './CardElement';

const getRandomIndexOfArray = (input) => {
  const randomIndex = Math.floor(Math.random() * input.length);
  return randomIndex;
};

const Card = ({ elements }) => {
  const elementLocations = useMemo(() => {
    console.log(elements);
    let locations = 'abcdefghijkl'.split('');
    const output = new Map();
    elements.forEach((element) => {
      // random index alljäänud locationitest
      const locationIndex = getRandomIndexOfArray(locations);
      // eemaldada locationitest selle indexiga elemendi
      const [location] = locations.splice(locationIndex, 1);
      // outputi lisada selle elemendi kohale locationi
      console.log(element, location);
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
  console.log(elementLocations);
  return <div className={styles.Card}>{elements.map(renderElement)}</div>;
};

export default Card;
