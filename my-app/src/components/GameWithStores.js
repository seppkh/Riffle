import React from 'react';
import useStoreGame from '../store/gameStateStore';
import ShowCardsWithStores from './ShowCardsWithStores';
import CountersWithStores from './CountersWithStores';


const GameWithStores = () => {

  const startGame = useStoreGame(state => state.startGame);
  const reset = useStoreGame(state => state.reset);
  const togglePause = useStoreGame(state => state.togglePause);


  const increaseLevel = useStoreGame(state => state.increaseLevel);
  const level = useStoreGame(state => state.level);
  const gameState = useStoreGame(state => state.gameState);

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
      <button onClick={startGame}>Start game</button>
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
