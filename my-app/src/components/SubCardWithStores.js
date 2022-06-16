import OnCardClickHandler from '../utils/cardClickFunc';
import useStoreSlices from '../store/rootSliceStore';
import Card from './Card';
import './Subcard.css';

import useSound from 'use-sound';
import guessRight from '../assets/sounds/guessRight.mp3';
import guessWrong from '../assets/sounds/guessWrong.mp3';
import bonusPoint from '../assets/sounds/bonusPoint.mp3';

import guessRightV2 from '../assets/sounds/custom/correctCard.wav';
import guessWrongV2 from '../assets/sounds/custom/wrongCard.wav';
import bonusPointV2 from '../assets/sounds/custom/nextLevel-bonuspoint.wav';


const SubCardWithStores = ({ card, elementsColors }) => {
  const { soundState } = useStoreSlices();

  const useStoreSlicesRead = useStoreSlices();

  const [playRight] = useSound(guessRightV2, { soundEnabled: soundState, volume: 0.4 });
  const [playWrong] = useSound(guessWrongV2, { soundEnabled: soundState, volume: 0.5 });
  const [playBonus] = useSound(bonusPointV2, { soundEnabled: soundState, volume: 0.4 });

  return (
    <Card
      isMatch={card.isMatch}
      isActive={card.isActive}
      onClick={() =>
        OnCardClickHandler(
          card,
          useStoreSlicesRead,
          playRight,
          playWrong,
          playBonus
        )
      }
      elements={card.elements}
      elementsColors={elementsColors}
    />
  );
};

export default SubCardWithStores;
