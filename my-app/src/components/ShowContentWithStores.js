import useStoreSlices from "../store/rootSliceStore";
import CountersWithStores from "./CountersWithStores";
import ShowCardsWithStores from "./ShowCardsWithStores";


const ShowContentWithStores = () => {

  const gameState = useStoreSlices(state => state.gameState);
  const score = useStoreSlices(state => state.score);

  const startGame = useStoreSlices(state => state.startGame);
  const reset = useStoreSlices(state => state.reset);
  const togglePause = useStoreSlices(state => state.togglePause);

  const assignCards = useStoreSlices(state => state.assignCards);
  const unAssignCards = useStoreSlices(state => state.unAssignCards);

  if (gameState === 'notStarted') {
    return (
      <>
        <p>Setting up your gameplay...</p>
        <h2>Click the button to start your game</h2><br/>
        <button onClick={ () => { reset(); startGame(); assignCards() } }>Start game</button>
      </>
    )
  }

  if (gameState === 'paused') {
    return (
      <>
        <h2>Game is paused</h2>
        <p>Needed a break already, yeh?</p><br/>
        <h2>Click the button to continue your game</h2><br/>
        <button onClick={togglePause}>Unpause</button>
      </>
    )
  }

  if (gameState === 'ended') {
    let endingMessage = '';
    if (score <= 5 ) endingMessage = "A little disappointing if I'm honest...";
    if (score > 5 && score <= 10 ) endingMessage = 'Nicely done!';
    if (score > 10 && score <= 20 ) endingMessage = 'You aced it!';
    if (score > 20) endingMessage = "Wow! You're a natural pro at this game!";

    return (
      <>
        <h2>Game over – you ran out of time!</h2>
        <p>Your final score is {score} points</p>
        <h5>{endingMessage}</h5><br/>

        <p>Surely you can beat your own score...</p>
        <button onClick={ () => { reset(); unAssignCards(); } }>Play again</button>
      </>
    )
  }

  if (gameState === 'running') {
    return (
      <>
      <div>
        <CountersWithStores />

        <ShowCardsWithStores />
        <br/>

        <button onClick={togglePause}>Pause</button>
      </div>
      </>
    )
  }

}

export default ShowContentWithStores;