import React, { useState, useEffect } from 'react';

const Game = () => {

  const [gameOver, setGameOver] = useState(true)
  const [score, setScore] = useState('')
  const [level, setLeveL] = useState('')
  const [time, setTime] = useState('')
  const [mainCardElementCount, setMainCardElementCount] = useState('')
  const [cardElementCount, setCardElementCount] = useState('')
  const [matchingElementCount, setMatchingElementCount] = useState('')
  const [guessStatus, setGuessStatus] = useState(true)
  const [deactivatedCardCount, setDeactivatedCardCount] = useState('')

  const [cardSet, setCardSet] = useState({})

  const [mainCard, setMainCard] = useState({})
  const [card1, setCard1] = useState({})
  const [card2, setCard2] = useState({})
  const [card3, setCard3] = useState({})

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
  }

  cardSet = {
    mainCard: {
      elements: [],
    },
    card1: {
      elements: [],
      isMatch: false,
      active: true
    },
    card2: {
      elements: [],
      isMatch: false,
      active: true
    },
    card3: {
      elements: [],
      isMatch: false,
      active: true
    },
  };
   

  useEffect(() => {
    // set guessStatus to false

    // read level
    // set number of elements on mainCard
    // set number of elements on subcards
    // set number of matching elements on correct card

    // create sets of elements for each card
    // save True match value to correct subset
    // suffle subcards values in cardSet, keeping subcard key name. Use tempCard for shuffling.

    // appoint set of elements to mainCard
    // appoint set of elements and match status to subcards

    // set time to full time value (30 sec)
    // set gameOver to false

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