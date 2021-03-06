import { useEffect } from 'react';
import useSound from 'use-sound';
import useStoreSlices from '../store/rootSliceStore';
import lastSecondsBeep from '../assets/sounds/lastSecondsBeep.mp3';
import lastSecondsTick from '../assets/sounds/custom/kell2-1sec.wav';
import levelSettings from '../store/levelSettings';

const CountersTertiary = () => {
  const {
    gameState,
    soundState,
    timeLeft,
    timeLeftBonus,
    tick,
    tickBonus,
  } = useStoreSlices();

  const MINUTE_MS = 1000;
  const MINUTE_MS_BONUS = 50;

  const [playTimerEnding] = useSound(lastSecondsTick, { soundEnabled: soundState, volume: 0.7 });

  // console.log("gameState from CountersWithStores:", gameState);

  useEffect(() => {
    if (gameState !== 'running') return;

    if (timeLeft <= 0) return;

    if (timeLeft > 0) {
      const timeInterval = setInterval(() => {
        tick();
      }, MINUTE_MS);

      if (timeLeft <= 5) playTimerEnding();

      // console.log('timeLeft from CounterWithStores:', timeLeft);

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

      // console.log('timeLeftBonus from CounterWithStores:', timeLeftBonus);

      return () => {
        clearInterval(bonusTimeInterval);
      };
    }
  }, [gameState, timeLeftBonus]);


  return (
    <>
      <p className='time'>time: {timeLeft}</p>
      <p className='bonus'>3X bonus: {timeLeftBonus}</p>
    </>
  );
};

export default CountersTertiary;
