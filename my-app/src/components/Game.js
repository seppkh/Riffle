import React, { useState, useEffect } from 'react';
import createSets from '../utils/createElementSets';
import shuffle from '../utils/shuffleSubCardOrder';

const Game = () => {

  var [gameOver, setGameOver] = useState(true)
  var [score, setScore] = useState('')
  var [level, setLeveL] = useState('')
  var [time, setTime] = useState('')
  var [mainCardElementCount, setMainCardElementCount] = useState('')
  var [cardElementCount, setCardElementCount] = useState('')
  var [matchingElementCount, setMatchingElementCount] = useState('')
  var [guessStatus, setGuessStatus] = useState(true)
  var [deactivatedCardCount, setDeactivatedCardCount] = useState('')

  var [cardSet, setCardSet] = useState({})

  var [mainCard, setMainCard] = useState({})
  var [card1, setCard1] = useState({})
  var [card2, setCard2] = useState({})
  var [card3, setCard3] = useState({})

  const ELEMENTS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]

  const LEVEL_SETUP = {
    1: {
      "mainCardElementCount": 2,
      "cardElementCount": 1,
      "matchingElementCount": 1
    },
    2: {
      "mainCardElementCount": 2,
      "cardElementCount": 2,
      "matchingElementCount": 1
    },
    3: {
      "mainCardElementCount": 3,
      "cardElementCount": 2,
      "matchingElementCount": 1
    },
    4: {
      "mainCardElementCount": 3,
      "cardElementCount": 3,
      "matchingElementCount": 2
    },
    5: {
      "mainCardElementCount": 4,
      "cardElementCount": 4,
      "matchingElementCount": 2
    },
    15: {
      "mainCardElementCount": 8,
      "cardElementCount": 6,
      "matchingElementCount": 3
    },
  }   

  useEffect(() => {
    // set guessStatus to false
    guessStatus = false;

    // read level
    if (level === '') level = 15;

    // set number of elements on mainCard
    // set number of elements on subcards
    // set number of matching elements on correct card
    let { mainCardElementCount, cardElementCount, matchingElementCount } = LEVEL_SETUP[level];
    console.log("mainCardElementCount:", mainCardElementCount);
    console.log("cardElementCount:", cardElementCount);
    console.log("matchingElementCount:", matchingElementCount);

    // create sets of elements with isMatch and active flags for each card
    let cardSet = createSets(mainCardElementCount, cardElementCount, matchingElementCount);

    // appoint set of elements to mainCard
    let mainCard = cardSet.mainCard;
    console.log("mainCard:", mainCard);

    // suffle subcards values in cardSet and store in new array
    var subCards = [];
    subCards.push(cardSet.card1, cardSet.card2, cardSet.card3);
    var subCardsShuffle = shuffle(subCards);

    // appoint set of elements to subcards 
    [card1, card2, card3] = subCardsShuffle;
    console.log("card1:", card1);
    console.log("card2:", card2);
    console.log("card3:", card3);

    // set time to full time value (30 sec)
    time = 30;

    // set gameOver to false
    gameOver = false;

  }, [])

  const onCardClickHandler = (clicked_card) => {
    // check if clicked card is active
    // check if clicked card is matching

    // if not active, return nothing
    if (clicked_card.isActive === false) return "invalid move";

    // if active and matching
    // update score by 1
    // increase time by 6 sec
    // update level value
    // read deactivated card count
      // if deactivated card count bigger than 0
        // set other cards to active
        // set deactivatedCardCount to 0
    // set guessStatus to true
    if (clicked_card.isActive === true && clicked_card.isMatch === true) {
      score += 1;
      time += 6;
      level += 1
      if (deactivatedCardCount > 1) {
        card1.isActive = card2.isActive = card3.isActive = true;
        deactivatedCardCount = 0;
      }
      guessStatus = true;

      return changeLevel();
    }

    // if active and not matching
    if (clicked_card.isActive === true && clicked_card.isMatch === false) {
      clicked_card.isActive = false;
      deactivatedCardCount += 1;
      score -= 1;
      time -= 3;
    } 
      
  }

  const changeLevel = () => {

  }

  const checkTime = () => {

  }


  return (
    <div>
      Tere!
      <div class="card card-big" id="mainCardArea">
        <h1>mainCard: {mainCard.elements}</h1>
      </div>
      <div class="card card-small" id="card1Area">
        <p>card1: {card1.elements}</p>
      </div>
      <div class="card card-small" id="card2Area">
        <p>card2: {card2.elements}</p>
      </div>
      <div class="card card-small" id="card3Area">
        <p>card3: {card3.elements}</p>
      </div>


    </div>
  )

}

export default Game;