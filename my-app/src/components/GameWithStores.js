import React, { useEffect } from 'react';
import ShowCardsWithStores from './ShowCardsWithStores';
import CountersWithStores from './CountersWithStores';
import useStoreSlices from '../store/rootSliceStore';


const GameWithStores = () => {

  const startGame = useStoreSlices(state => state.startGame);
  const reset = useStoreSlices(state => state.reset);
  const togglePause = useStoreSlices(state => state.togglePause);

  const gameState = useStoreSlices(state => state.gameState);

  // if game is paused, cover the game
  if (gameState === "paused") {

  }
   // if game is ended, cover the game and show restart button
   if (gameState === "ended") {

  }

  useEffect(() => {


  }, [])
  

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

  // change card color
  function toggleActiveStyles(clicked_card) {
    
    if (clicked_card.isActive === false) {
      return "box inactive"
    } else {
      return "box active"
    }
  }

  return (
  <>
    <div>
      <button onClick={ () => { reset(); startGame(); } }>Start game</button>
      <button onClick={reset}>Reset</button>
      <button onClick={togglePause}>Pause</button>
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
