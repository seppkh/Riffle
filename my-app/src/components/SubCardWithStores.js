import OnCardClickHandler from '../utils/cardClickFunc';
import useStoreSlices from '../store/rootSliceStore';
import Card from './Card';
import './Subcard.css';

import useSound from 'use-sound';
import guessRight from '../assets/sounds/guessRight.mp3';
import guessWrong from '../assets/sounds/guessWrong.mp3';
import bonusPoint from '../assets/sounds/bonusPoint.mp3';

const SubCardWithStores = ({ card, elementsColors }) => {

  const {
    soundState,
  } = useStoreSlices();

  const useStoreSlicesRead = useStoreSlices();

  /*
  const [playRight] = useSound(guessRight, { soundEnabled: soundState });
  const [playWrong] = useSound(guessWrong, { soundEnabled: soundState });
  const [playBonus] = useSound(bonusPoint, { soundEnabled: soundState }); */

  return (
    <>
    <Card 
      onClick={() => OnCardClickHandler(
        card,
        useStoreSlicesRead,
        // playRight,
        // playWrong,
        // playBonus
      )}
      elements={card.elements}
      elementsColors={elementsColors} />
      </>
  );
};

export default SubCardWithStores;
