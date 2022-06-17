const OnCardClickHandler = (clicked_card, useStoreSlices, 
  playRight, playWrong, playBonus
) => {

  // console.log("clicked_card", clicked_card);

  const { decreaseTime, 
    deactivateCard, 
    increaseScore, 
    activateCards,
    assignCards,
    increaseLevel,
    gameState,
    timeLeftBonus,
    resetTimeLeftBonus,
    increaseScoreBonus,
    decreaseLives } = useStoreSlices;

  // disable clicking on card if game not started or level not yet 1
  
  if (gameState === 'notStarted') return console.log("Game is not started yet");
  if (gameState === 'paused') return console.log("Game is paused");
  if (gameState === 'ended') return console.log("Game is ended");

  // if not active, return nothing
  if (clicked_card.isActive === false) return console.log("Invalid move - clicked card is not active");

  if (clicked_card.isActive === true && clicked_card.isMatch === false) {

    playWrong();

    console.log("Wrong guess - deactivating card");
    console.log("Time -3 sec");

    decreaseTime();
    decreaseLives();
    deactivateCard(clicked_card);

    return;
  }

  if (clicked_card.isActive === true && clicked_card.isMatch === true) {
    console.log("Correct card!");
    console.log("Time +5 sec");

    if (timeLeftBonus > 0) {
      increaseScoreBonus()
      playBonus();
      console.log("Score +3");

    } else {
      increaseScore()
      playRight();
      console.log("Score +1");

    };

    return (
      activateCards(),
      increaseLevel(),
      assignCards(),
      resetTimeLeftBonus()
    );

  }

  return;
};

export default OnCardClickHandler;