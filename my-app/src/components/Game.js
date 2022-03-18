import React, { useState, useEffect } from 'react';
import createSets from '../utils/createElementSets';
import shuffle from '../utils/shuffleSubCardOrder';
import ReactDOM from "react-dom";
import './Game.css';
import { render } from 'express/lib/response';


const Game = () => {

  var [gameOver, setGameOver] = useState(true)
  var [score, setScore] = useState('')
  var [level, setLeveL] = useState(1)
  var [time, setTime] = useState('')
  var [mainCardElementCount, setMainCardElementCount] = useState('')
  var [cardElementCount, setCardElementCount] = useState('')
  var [matchingElementCount, setMatchingElementCount] = useState('')
  var [guessStatus, setGuessStatus] = useState(true)
  var [deactivatedCardCount, setDeactivatedCardCount] = useState('')

  var [cardSet, setCardSet] = useState({})

  var [mainCard, setMainCard] = useState({
    elements: [555, 678]
  })
  var [card1, setCard1] = useState({
    elements: [4320, 4444, 839],
    isMatch: false,
    isActive: true
  })
  var [card2, setCard2] = useState({
    elements: [3434],
    isMatch: false,
    isActive: true
  })
  var [card3, setCard3] = useState({
    elements: [765],
    isMatch: false,
    isActive: true
  })

  var [cardsState, changeState] = useState({
    activeObject: null,
    main: [{id: mainCard}],
    objects: [{id: card1}, {id: card2}, {id: card3}]
  });

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
    if (level === '') level = 1;

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

      return; // changeLevel();
    }

    // if active and not matching
    if (clicked_card.isActive === true && clicked_card.isMatch === false) {
      clicked_card.isActive = false;
      deactivatedCardCount += 1;
      score -= 1;
      time -= 3;
    } 
      
  }


  function toggleActive(index) {
    changeState({...cardsState, activeObject: cardsState.objects[index] });
  }
  function toggleActiveStyles(index) {
    if (cardsState.objects[index] === cardsState.activeObject) {
      return "box active"
    } else {
      return "box inactive"
    }
  }


  return (
    <div>

      <div className='card mainCard'>
        {cardsState.main.map((element, index) => (
          <div key={index} className="box boxMain">
            <p>mainCard elements: {element.id.elements.join(", ")}</p>
          </div>
        ))}
      </div>
      
      <div className='card subCards'>
          {cardsState.objects.map((element, index) => (
            <div key={index} className={toggleActiveStyles(index)} onClick={() => { toggleActive(index); } }>
              <p>subCard elements: {element.id.elements.join(", ")}</p>
            </div>
          ))}
        </div>

      <div className="card card-small" id="mainCardArea">
        <h1>mainCard:</h1>
      </div>

      <div className="card card-small" id="card1">
        <p>card1</p>
      </div>

      <div className="card card-small" id="card2Area">
        <p>card2:</p>
      </div>
      <div className="card card-small" id="card3Area">
        <p>card3:</p>
      </div>


    </div>
  )

}

export default Game;