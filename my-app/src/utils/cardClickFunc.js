import useStoreSlices from "../store/rootSliceStore";

function OnCardClickHandler(clicked_card) {
  console.log("Hei:");

  const {decreaseTime, 
    deactivateCard, 
    increaseScore, 
    activateCards, 
    increaseLevel,
    gameState, 
    level } = useStoreSlices;

  // const gameState =  useStoreSlices((state) => state.gameState);

  gameState = "running";
  level = 1;

  console.log("Another:");

  console.log("gameState:", gameState);
  console.log("level:", level);
  console.log("clicked_card:", clicked_card);

  // disable clicking on card if game not started or level not yet 1
  if (gameState !== "running") return console.log("Game is not running");
  if (level === 0) return console.log("No cards loaded yet - nothing to react to");

  // if not active, return nothing
  if (clicked_card.isActive === false) return console.log("Invalid move – clicked card is already inactive");

  if (clicked_card.isActive === true && clicked_card.isMatch === false) {

    console.log("Wrong guess – card is now deactivated");
    return (
      decreaseTime,
      deactivateCard
    );
  }

  if (clicked_card.isActive === true && clicked_card.isMatch === true) {

    return (
      increaseScore,
      activateCards,
      increaseLevel
    );

  }

  return;
};

export default OnCardClickHandler;