import { useEffect } from 'react';
import useSound from 'use-sound';
import useStoreSlices from '../store/rootSliceStore';
import './Counters.css';
import lastSecondsBeep from '../assets/sounds/lastSecondsBeep.mp3';


const CountersWithStores = () => {

  const {
    gameState,
    score,
    level,
    soundState,
    timeLeft,
    timeLeftBonus,
    tick,
    tickBonus
  } = useStoreSlices();

  const MINUTE_MS = 1000;
  const MINUTE_MS_BONUS = 25;

  /*
  const [playTimerEnding] = useSound(lastSecondsBeep, {
    soundEnabled: soundState,
  }); */

  console.log("gameState from CountersWithStores:", gameState);

  /*
  useEffect(() => {
    if (gameState !== "running") return;

    const timeInterval = setInterval(() => {
      tick();
    }, MINUTE_MS);
    const bonusTimeInterval = setInterval(() => {
      tickBonus();
    }, MINUTE_MS_BONUS);

    if (timeLeft <= 5) playTimerEnding();

    return () => {
      clearInterval(timeInterval);
      clearInterval(bonusTimeInterval);
    };
  }, [gameState, timeLeft]);
  */


  return (
    <div className='counters-all'>
      <p>level: {level}</p>
      <p>time: {timeLeft}</p>
      <p>3X bonus: {timeLeftBonus}</p>
      <p>score: {score}</p>
    </div>
  );
};

export default CountersWithStores;
