import OnCardClickHandler from '../utils/cardClickFunc';
import useStoreSlices from '../store/rootSliceStore';
import Card from './Card';
import './Subcard.css';

import useSound from 'use-sound';
import guessRight from '../assets/sounds/guessRight.mp3';
import guessWrong from '../assets/sounds/guessWrong.mp3';
import bonusPoint from '../assets/sounds/bonusPoint.mp3';

const SubCardWithStores = ({ card }) => {
  const useStoreSlicesRead = useStoreSlices();
  const soundState = useStoreSlices((state) => state.soundState);

  const [playRight] = useSound(guessRight, { soundEnabled: soundState });
  const [playWrong] = useSound(guessWrong, { soundEnabled: soundState });
  const [playBonus] = useSound(bonusPoint, { soundEnabled: soundState });

  return (
    <Card
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
    />
    // <div
    //   className=''
    //   onClick={() =>
    //     OnCardClickHandler(
    //       card,
    //       useStoreSlicesRead,
    //       playRight,
    //       playWrong,
    //       playBonus
    //     )
    //   }
    // >
    //   <p className='subcard-elements'>{card.elements.join(', ')}</p>
    //   <p className='subcard-match'>{card.isMatch.toString()} </p>
    // </div>
  );
};

export default SubCardWithStores;
