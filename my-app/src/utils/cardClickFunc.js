
const OnCardClickHandler = (clicked_card, useStoreSlices, playRight, playWrong, playBonus) => {

  console.log("clicked_card", clicked_card);

  const {decreaseTime, 
    deactivateCard, 
    increaseScore, 
    activateCards,
    assignCards,
    increaseLevel,
    gameState,
    timeLeftBonus,
    resetTimeLeftBonus,
    increaseScoreBonus } = useStoreSlices;

  // disable clicking on card if game not started or level not yet 1
  
  if (gameState === 'notStarted') return console.log("Game is not started yet");
  if (gameState === 'paused') return console.log("Game is paused");
  if (gameState === 'ended') return console.log("Game is ended");

  // if not active, return nothing
  if (clicked_card.isActive === false) return console.log("Invalid move - clicked card is not active");

  if (clicked_card.isActive === true && clicked_card.isMatch === false) {

    playWrong();

    console.log("Wrong guess - deactivating card");
    decreaseTime();
    deactivateCard(clicked_card);

    return;
  }

  if (clicked_card.isActive === true && clicked_card.isMatch === true) {

    if (timeLeftBonus > 0) {
      increaseScoreBonus()
      playBonus();
      
    } else {
      increaseScore()
      playRight();
    };

    return (
      console.log("Correct card!"),
      activateCards(),
      increaseLevel(),
      assignCards(),
      resetTimeLeftBonus()
    );

  }

  return;
};

export default OnCardClickHandler;