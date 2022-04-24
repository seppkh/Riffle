import React, { useEffect } from 'react';
import ShowCardsWithStores from './ShowCardsWithStores';
import CountersWithStores from './CountersWithStores';
import useStoreSlices from '../store/rootSliceStore';


const GameWithStores = () => {

  const startGame = useStoreSlices(state => state.startGame);
  const reset = useStoreSlices(state => state.reset);
  const togglePause = useStoreSlices(state => state.togglePause);

  const gameState = useStoreSlices(state => state.gameState);
  const assignCards = useStoreSlices(state => state.assignCards);
  const unAssignCards = useStoreSlices(state => state.unAssignCards);


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



  const onCardClickHandler = (clicked_card) => {
    // check if clicked card is active
    // check if clicked card is matching

    // if not active, return nothing

    // if active and matching
      // set guessStatus to true
      // increase score by 1
      // increase time by 6 sec
    // read deactivated card count
      // if deactivated card count bigger than 0
        // set other cards to active
        // set deactivatedCardCount to 0
     // change level (level value)

    // if active and not matching
      // set guessStatus to false
      // set clicked_card Active status to false
      // increase deactivatedCardCount by 1
      // decrease score by 1
      // decrease time by 6 sec

  } 

  return (
  <>
    <div>
      <button onClick={ () => { reset(); startGame(); assignCards() } }>Start game</button>
      <button onClick={ () => { reset(); unAssignCards(); } }>Reset</button>
      <button onClick={togglePause}>Pause/Unpause</button>
    </div>

    <div>
      <CountersWithStores />
    </div>

    <div id='cardsArea' >
      <ShowCardsWithStores key="show-cards" title="showcards component" />
    </div>  
  </>

  )
}

export default GameWithStores;
