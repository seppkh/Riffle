import React, { useState, useEffect, useCallback, useRef } from 'react';
import createSets from '../utils/createElementSets';
import shuffle from '../utils/shuffleSubCardOrder';
import ReactDOM from "react-dom";
import './Game.css';
import CardList from './CardList';

const Game = () => {

  let gameOver = useRef(true);
    // let [gameOver, setGameOver] = useState(true)
  let score = useRef(0);
  let level = useRef(0);
  let [currentLevel, setCurrentLeveL] = useState(0);
  let time = useRef(0);
  let mainCardElementCount = useRef(0);
  let cardElementCount = useRef(0);
  let matchingElementCount = useRef(0);
  let guessStatus = useRef(true);
    // let [guessStatus, setGuessStatus] = useState(true)
  let deactivatedCardCount = useRef(0);
  let counters = useRef([]);

  // let [score, setScore] = useState(0)
  // let [level, setLevel] = useState(2)
  //let [time, setTime] = useState(0)
  // let [mainCardElementCount, setMainCardElementCount] = useState(0)
  // let [cardElementCount, setCardElementCount] = useState(0)
  // let [matchingElementCount, setMatchingElementCount] = useState(0)
  // let [guessStatus, setGuessStatus] = useState(true)
  // let [deactivatedCardCount, setDeactivatedCardCount] = useState(0)

  let cardSet = useRef({})

  let mainCard = useRef({
    elements: []
  })
  let card1 = useRef({
    elements: [],
    isMatch: false,
    isActive: true
  })
  let card2 = useRef({
    elements: [],
    isMatch: false,
    isActive: true
  })
  let card3 = useRef({
    elements: [],
    isMatch: false,
    isActive: true
  })

  let cards = useRef({
    activeObject: null,
    main: [{id: mainCard.current}],
    objects: [{id: card1.current}, {id: card2.current}, {id: card3.current}]
  });

  const ELEMENTS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]

  const LEVEL_SETUP = useRef({
    0: {
      "mainCardElementCount": 0,
      "cardElementCount": 0,
      "matchingElementCount": 0
    },
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
    6: {
      "mainCardElementCount": 6,
      "cardElementCount": 4,
      "matchingElementCount": 2
    },
    7: {
      "mainCardElementCount": 6,
      "cardElementCount": 6,
      "matchingElementCount": 2
    },
    8: {
      "mainCardElementCount": 7,
      "cardElementCount": 6,
      "matchingElementCount": 3
    },
    9: {
      "mainCardElementCount": 7,
      "cardElementCount": 7,
      "matchingElementCount": 3
    },
    10: {
      "mainCardElementCount": 8,
      "cardElementCount": 5,
      "matchingElementCount": 2
    },
    15: {
      "mainCardElementCount": 8,
      "cardElementCount": 6,
      "matchingElementCount": 3
    },
  });

  useEffect(() => {
      // set guessStatus to false
      guessStatus.current = false;

      if (level.current === 0) level.current = 0;
      console.log("level.current:", level.current);
      console.log("currentLevel:", currentLevel);

      const tempLevel = level.current;
      const tempLEVEL_SETUP = LEVEL_SETUP.current

      // set number of elements on mainCard
      // set number of elements on subcards
      // set number of matching elements on correct card      
      counters.current = [
        tempLEVEL_SETUP[tempLevel].mainCardElementCount,
        tempLEVEL_SETUP[tempLevel].cardElementCount,
        tempLEVEL_SETUP[tempLevel].matchingElementCount];

      [ mainCardElementCount.current, cardElementCount.current, matchingElementCount.current ] = counters.current;

      console.log("counters.current:", counters.current);
      console.log("mainCardElementCount:", mainCardElementCount.current);
      console.log("cardElementCount:", cardElementCount.current);
      console.log("matchingElementCount:", matchingElementCount.current);

      // create sets of elements with isMatch and active flags for each card
      cardSet.current = createSets(mainCardElementCount.current, cardElementCount.current, matchingElementCount.current);

      // appoint set of elements to mainCard
      mainCard.current = cardSet.current.mainCard;
      console.log("mainCard:", mainCard.current);

      // suffle subcards values in cardSet and store in new array
      let subCards = [];
      subCards.push(cardSet.current.card1, cardSet.current.card2, cardSet.current.card3);
      let subCardsShuffle = shuffle(subCards);

      // appoint set of elements to subcards 
      card1.current = subCardsShuffle[0];
      card2.current = subCardsShuffle[1];
      card3.current = subCardsShuffle[2];

      console.log("card1:", card1.current);
      console.log("card2:", card2.current);
      console.log("card3:", card3.current);

      console.log("cards.current before:", cards.current);

      cards.current = {
        activeObject: null,
        main: [{id: mainCard.current}],
        objects: [{id: card1.current}, {id: card2.current}, {id: card3.current}]
      };

      console.log("cards.current after:", cards.current);
    
      // set time to full time value (30 sec)
      time.current = 30;

      // set gameOver to false
      gameOver.current = false;

  }, [currentLevel])

  function changeLevel() {
    console.log("previous level:",level.current);
    level.current += 1;
    setCurrentLeveL(level.current);
    
    mainCard.current = cards.current.main.id;
    card1.current = cards.current.objects[0].id;
    card2.current = cards.current.objects[1].id;
    card3.current = cards.current.objects[2].id;

    console.log("currentLevel:",currentLevel);

    console.log("new level:",level.current);

  }

  const onCardClickHandler = (clicked_card) => {
    // check if clicked card is active
    // check if clicked card is matching

    // if not active, return nothing
    if (clicked_card.isActive === false) return console.log("invalid move");

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
      score.current += 1;
      time.current += 6;
      level.current += 1;

      if (deactivatedCardCount > 1) {
        card1.isActive = card2.isActive = card3.isActive = true;
        deactivatedCardCount.current = 0;
      }
      guessStatus.current = true;

      return; // changeLevel();
    }

    // if active and not matching
    if (clicked_card.isActive === true && clicked_card.isMatch === false) {
      clicked_card.isActive = false;
      
      deactivatedCardCount.current += 1;
      score.current -= 1;
      time.current -= 3;
    } 
      
  }
  function toggleActive(index) {
    cards.current = {...cards, activeObject: cards.objects[index] };
  }
  function toggleActiveStyles(index) {
    if (cards.current.objects[index] === cards.activeObject) {
      return "box active"
    } else {
      return "box inactive"
    }
  }

  return (
  <>
    <button onClick={changeLevel}>Load cards</button>

    <div id='cardsArea'>
      <div className='card mainCard'>
        {cards.current.main.map((element, index) => (
          <div key={index} className="box boxMain">
            <p id='mainCardContent'>mainCard elements: {element.id.elements.join(", ")}</p>
          </div>
        ))}
      </div>
      <div className='card subCards'>
        <CardList subcards={cards.current.objects} title="All subcards" />
      </div>
      <br></br><br></br><br></br>
      
    </div>
    
    <div className="container-counters">
      <div className="counters">
        <p> Score: {score.current}</p>
        <p> Level: {level.current-1}</p>
        <p> mainCard elements: {mainCardElementCount.current}</p>
        <p> subCard elements: {cardElementCount.current}</p>
        <p> matching elements: {matchingElementCount.current}</p>

        <p> Time: {time.current}</p>

      </div>
    </div>
    
    <script src="./bundle.js"></script>
    </>

  )

}

/* 
<div className='card subCards'>
        {cards.current.objects.map((element, index) => (
            <div key={index} className='{toggleActiveStyles(index)}' onClick={() => { toggleActive(index); } }>
              <p>subCard elements: {element.id.elements.join(", ")}</p>
            </div>
          ))}
      </div>
*/
export default Game;