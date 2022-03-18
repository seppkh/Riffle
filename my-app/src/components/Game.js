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
      "cardElementCount": 8,
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

    // create sets of elements for each card
    // save True match value to correct subset
    let cardSet = createSets(mainCardElementCount, cardElementCount, matchingElementCount);
    console.log("cardSet:", cardSet);

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
 
    // extract isMatch value of clicked_card

    // if matched
      // update score by 1
      // increase time by 6 sec
      // update level value
      // update mainCardElementCount value,
      // update cardElementCount value
      // update matchingElementCount value
        // if deactivated card count bigger than 0
          // set other cards to active
          // set deactivatedCardCount to 0
      // set guessStatus to true

    // else
      // extract active value of clicked_card

      // if active
        // deactivate clicked_card
        // increase deActivatedCardCount by 1
        // decrease score by 1
        // decrease time by 3 sec
      // else
        // do nothing
      
  }

  return (
    <div>
      <p>Elements: {ELEMENTS}</p>
      Tere!
    </div>
  )

}

export default Game;