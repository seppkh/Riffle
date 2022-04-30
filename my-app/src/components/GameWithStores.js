import React, { useEffect } from 'react';
import useStoreSlices from '../store/rootSliceStore';
import ShowContentWithStores from './ShowContentWithStores';
import './StickyButtons.css';


const GameWithStores = () => {

  const toggleMute = useStoreSlices(state => state.toggleMute);
  const exit = useStoreSlices(state => state.exit);
  const gameState = useStoreSlices(state => state.gameState);

  const tick = useStoreSlices(state => state.tick);
  const MINUTE_MS = 1000;

  useEffect(() => {
    if (gameState !== "running") return;

    const interval = setInterval(() => {
      tick();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  
  }, [gameState])
  


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
