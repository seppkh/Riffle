import { useEffect } from 'react';
import useSound from 'use-sound';
import useStoreSlices from '../store/rootSliceStore';
import './Counters.css';
import lastSecondsBeep from '../assets/sounds/lastSecondsBeep.mp3';
import levelSettings from '../store/levelSettings';

const CountersSecondary = () => {
  const {
    gameState,
    level,
    soundState,
    timeLeft,
    timeLeftBonus,
    tick,
    tickBonus,
  } = useStoreSlices();

  const matchingElementCount = levelSettings[level].matchingElementCount;

  const MINUTE_MS = 1000;
  const MINUTE_MS_BONUS = 50;

  /*
  const [playTimerEnding] = useSound(lastSecondsBeep, {
    soundEnabled: soundState,
  }); */

  // console.log("gameState from CountersWithStores:", gameState);

  useEffect(() => {
    if (gameState !== 'running') return;

    if (timeLeft <= 0) return;

    if (timeLeft > 0) {
      const timeInterval = setInterval(() => {
        tick();
      }, MINUTE_MS);

      console.log('timeLeft from CounterWithStores:', timeLeft);

      return () => {
        clearInterval(timeInterval);
      };
    }
  }, [timeLeft]);

  useEffect(() => {
    if (gameState !== 'running') return;

    if (timeLeftBonus <= 0) return;

    if (timeLeftBonus > 0) {
      const bonusTimeInterval = setInterval(() => {
        tickBonus();
      }, MINUTE_MS_BONUS);

      console.log('timeLeftBonus from CounterWithStores:', timeLeftBonus);

      return () => {
        clearInterval(bonusTimeInterval);
      };
    }
  }, [gameState, timeLeftBonus]);

  return (
    <div className='counters-all'>
      <p className='level'>level: {level}</p>
      <p className='elements'>matching elements: {matchingElementCount}</p>
      <p className='time'>time: {timeLeft}</p>
      <p className='bonus'>3X bonus: {timeLeftBonus}</p>
    </div>
  );
};

export default CountersSecondary;
