import { useEffect } from 'react';
import useSound from 'use-sound';
import useStoreSlices from '../store/rootSliceStore';
import lastSecondsBeep from '../assets/sounds/lastSecondsBeep.mp3';
import lastSecondsTick from '../assets/sounds/custom/kell2-1sec.wav';
import levelSettings from '../store/levelSettings';

const CountersSecondary = () => {
  const {
    level
  } = useStoreSlices();

  const matchingElementCount = levelSettings[level].matchingElementCount;

  return (
    <div className='counters-secondary'>
      <p className='elements'>matching elements: {matchingElementCount}</p>
    </div>
  );
};

export default CountersSecondary;
