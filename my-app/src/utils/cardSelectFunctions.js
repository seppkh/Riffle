import cardIsActiveNoMatch from "./cardIsActiveNoMatch";
import Game from "../components/Game";

function onCardClickHandler(clicked_card) {
  console.log("clicked_card", clicked_card);

  // if active and not matching
  if (clicked_card.isActive === true && clicked_card.isMatch === false) {
    clicked_card.isActive = false;

    cardIsActiveNoMatch();
  }

  if (clicked_card.isActive === false) return alert("Invalid move");

  if (clicked_card.isActive === true && clicked_card.isMatch === true) {
    Game.changeLevel()

  return;
  };
}

function toggleActiveStyles(clicked_card) {
  
  if (clicked_card.isActive === true) {
    return "box active"
  } else {
    return "box inactive"
  }
}

export { onCardClickHandler, toggleActiveStyles };