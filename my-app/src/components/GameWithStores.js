import React, { useEffect } from 'react';
import useStoreSlices from '../store/rootSliceStore';
import ShowContentWithStores from './ShowContentWithStores';


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
  

  // if game is paused, cover the game
  if (gameState === "paused") {

  }
   // if game is ended, cover the game and show restart button
   if (gameState === "ended") {

  }


  return (
  <>
    <div>
      <button onClick={exit}>Exit</button>
      <button onClick={toggleMute}>Mute/Unmute</button><br/><br/>
    </div>

    <div>
      <ShowContentWithStores />
    </div>

  </>

  )
}

export default GameWithStores;
