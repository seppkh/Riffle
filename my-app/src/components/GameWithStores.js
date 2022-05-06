import React, { useEffect } from 'react';
import useStoreSlices from '../store/rootSliceStore';
import ShowContentWithStores from './ShowContentWithStores';
import './StickyButtons.css';


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

  useEffect(() => {
    if (gameState !== "running") return;

    const timeInterval = setInterval(() => {
      tick();
    }, MINUTE_MS);

    const bonusTimeInterval = setInterval(() => {
      tickBonus();
    }, MINUTE_MS_BONUS);

    return () => { clearInterval(timeInterval);
      clearInterval(bonusTimeInterval); }
  
  }, [gameState])


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
