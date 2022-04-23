
const OnCardClickHandler = (clicked_card, useStoreSlices) => {

  const {decreaseTime, 
    deactivateCard, 
    increaseScore, 
    activateCards, 
    increaseLevel,
    gameState } = useStoreSlices;

  // disable clicking on card if game not started or level not yet 1
  
  if (gameState === 'notStarted') return console.log("Game is not started yet");
  if (gameState === 'paused') return console.log("Game is paused");
  if (gameState === 'ended') return console.log("Game is ended");

  // if not active, return nothing
  if (clicked_card.isActive === false) return console.log("Invalid move - clicked card is not active");

  if (clicked_card.isActive === true && clicked_card.isMatch === false) {

    console.log("Wrong guess - deactivating card");
    decreaseTime();
    deactivateCard(clicked_card);

    return;
  }

  if (clicked_card.isActive === true && clicked_card.isMatch === true) {

    return (
      console.log("Correct card!"),
      increaseScore(),
      activateCards(),
      increaseLevel()
    );

  }

  return;
};

export default OnCardClickHandler;