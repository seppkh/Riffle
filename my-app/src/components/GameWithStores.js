import React, { useEffect } from 'react';
import useStoreSlices from '../store/rootSliceStore';
import ShowContentWithStores from './ShowContentWithStores';
import './StickyButtons.css';

import useSound from 'use-sound';
import lastSecondsBeep from '../assets/sounds/lastSecondsBeep.mp3';


const GameWithStores = () => {

  const toggleMute = useStoreSlices(state => state.toggleMute);
  const exit = useStoreSlices(state => state.exit);
  const gameState = useStoreSlices(state => state.gameState);

  const level = useStoreSlices(state => state.level);
  const levelSettings = useStoreSlices(state => state.levelSettings);
  const toggleFlashcard = useStoreSlices(state => state.toggleFlashcard);

  const tick = useStoreSlices(state => state.tick);
  const MINUTE_MS = 1000;
  const tickBonus = useStoreSlices(state => state.tickBonus);
  const MINUTE_MS_BONUS = 25;

  const timeLeft = useStoreSlices(state => state.timeLeft);
  const [playTimerEnding] = useSound(lastSecondsBeep);

  useEffect(() => {
    if (gameState !== "running") return;

    const timeInterval = setInterval(() => {
      tick();
    }, MINUTE_MS);
    const bonusTimeInterval = setInterval(() => {
      tickBonus();
    }, MINUTE_MS_BONUS);

    if (timeLeft <= 5) playTimerEnding();

    return () => { clearInterval(timeInterval);
      clearInterval(bonusTimeInterval); }
  
  }, [gameState, timeLeft])


  useEffect(() => {
    if (levelSettings[level].showFlashcard === true) {
      toggleFlashcard();
    }
    
  }, [level])
  


  return (
  <>
    <div className='stickybuttons-all'>
      <button onClick={exit}>Exit</button>
      <button onClick={toggleMute}>Mute/Unmute</button>
    </div>

    <div>
      <ShowContentWithStores />
    </div>

  </>

  )
}

export default GameWithStores;
