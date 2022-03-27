import React, { useRef } from 'react';
import cardIsActiveNoMatch from "./cardIsActiveNoMatch";
import Game from "../components/Game";
import Score from "../components/Score";

let score = Score;

function onCardClickHandler(clicked_card) {
  console.log("clicked_card", clicked_card);
  console.log("score imported", score);


  // if not active, return nothing
  if (clicked_card.isActive === false) return alert("Invalid move");

  // if active and not matching
  if (clicked_card.isActive === true && clicked_card.isMatch === false) {
    clicked_card.isActive = false;

    // score.decreaseScore();

    return;

          // cardIsActiveNoMatch();
  }

  // if active and matching
  if (clicked_card.isActive === true && clicked_card.isMatch === true) {

  return;
  };
}

function toggleActiveStyles(clicked_card) {
  
  if (clicked_card.isActive === false) {
    return "box inactive"
  } else {
    return "box active"
  }
}

export { onCardClickHandler, toggleActiveStyles };