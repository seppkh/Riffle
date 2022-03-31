import React, { useState, useEffect, useRef } from 'react';
import createSets from '../utils/createElementSets';
import shuffle from '../utils/shuffleSubCardOrder';
import './Game.css';
import level_settings from '../assets/levelSettings';
import Timer from './Countdown';

const Game = () => {

  let [gameOver, setGameOver] = useState(false);
  let [gameRestarted, setGameRestarted] = useState(0);

  let [score, setScore] = useState(0);
  let [time, setTime] = useState(15);
  let [timeChangeCounter, setTimeChangeCounter] = useState(0);
  let timeChange = useRef(0);

  let nextLevel = useRef(0);
  let [currentLevel, setCurrentLevel] = useState(0);

  let counters = useRef([]);
  let mainCardElementCount = useRef(0);
  let cardElementCount = useRef(0);
  let matchingElementCount = useRef(0);
  let deactivatedCardCount = useRef(0);

  let guessStatus = useRef(true);

  let cardsContent = useRef({})

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

  let [ cards, setCards ] = useState({
    activeObject: null,
    main: [mainCard.current],
    objects: [card1.current, card2.current, card3.current]
  });

  const ELEMENTS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]

  const LEVEL_SETUP = useRef(level_settings);

/*
// load first level
 useEffect(() => {

    changeLevel();
  }, []); */

// if time runs out end game
  useEffect(() => {

    if (Timer.timer <= 0) { 
      setGameOver(true) 
      alert("Game over! Time is over!")
    }
  }, [Timer.timer]);

// load new cards when currentLevel changes
  useEffect(() => {

  // List of correct variables to use in HTML code:
    // currentLevel – shows current level
    // nextLevel.current – shows next coming level
    // mainCard.current
    // card1.current
    // card2.current
    // card3.current
    // mainCardElementCount.current
    // cardElementCount.current
    // matchingElementCount.current

    console.log("-----");
    console.log("nextLevel.current:",nextLevel.current);
    console.log("currentLevel:",currentLevel);

      const tempLevel = nextLevel.current;
      const tempLEVEL_SETUP = LEVEL_SETUP.current

      // set number of elements on mainCard
      // set number of elements on subcards
      // set number of matching elements on correct card      
      counters.current = [
        tempLEVEL_SETUP[tempLevel].mainCardElementCount,
        tempLEVEL_SETUP[tempLevel].cardElementCount,
        tempLEVEL_SETUP[tempLevel].matchingElementCount];

      [ mainCardElementCount.current, cardElementCount.current, matchingElementCount.current ] = counters.current;

      // create sets of elements with isMatch and active flags for each card
      cardsContent.current = createSets(mainCardElementCount.current, cardElementCount.current, matchingElementCount.current);

      // appoint set of elements to mainCard
      mainCard.current = (cardsContent.current.mainCard);

      // suffle subcards values in cardsContent and store in new array
      let subCards = [];
      subCards.push(cardsContent.current.card1, cardsContent.current.card2, cardsContent.current.card3);
      let subCardsShuffle = shuffle(subCards);

      // appoint set of elements to subcards 
      card1.current = subCardsShuffle[0];
      card2.current = subCardsShuffle[1];
      card3.current = subCardsShuffle[2];

      console.log("mainCard.current:", mainCard.current);
      console.log("card1.current:", card1.current);
      console.log("card2.current:", card2.current);
      console.log("card3.current:", card3.current);

      setCards({
        activeObject: null,
        main: [mainCard.current],
        objects: [card1.current, card2.current, card3.current]
      });

      // set gameOver to false
      setGameOver(false);

  }, [currentLevel]);


// changeLevel logic and conditions
  function changeLevel() {
    console.log("gameOver", gameOver)
    console.log("time", time)

    console.log("Timer.timer", Timer.timer)
    console.log("currentLevel", currentLevel)
    console.log("nextLevel.current", nextLevel.current)
    

    if (gameOver === false && time === 0 && nextLevel.current === 0) setTime((t) => t +30);

    if (guessStatus.current === false) return console.log("Error: can't change level because guessStatus in not true");

    nextLevel.current += 1;
    setCurrentLevel(() => nextLevel.current);

    console.log("currentLevel", currentLevel)
    console.log("nextLevel.current", nextLevel.current)
  };


  const onCardClickHandler = (clicked_card) => {

    // disable clicking on card if currentLeveL is not yet 1
    if (currentLevel === 0) return console.log("No cards loaded yet - nothing to react to");

    if (gameOver === true) return console.log("Game is over");

    // check if clicked card is active
    // check if clicked card is matching
    console.log("clicked_card", clicked_card);

    // if not active, return nothing
    if (clicked_card.isActive === false) return console.log("Invalid move");

    // if active and matching
      // set guessStatus to true
      // increase score by 1
      // increase time by 6 sec
    // read deactivated card count
      // if deactivated card count bigger than 0
        // set other cards to active
        // set deactivatedCardCount to 0
     // change level (level value)

    if (clicked_card.isActive === true && clicked_card.isMatch === true) {
 
      // set guessStatus to true
      guessStatus.current = true;

      setScore((s) => s +1);
      setTime((t) => t +7);
      
      setTimeChangeCounter((n) => n +1);
      timeChange.current = 7;

      if (deactivatedCardCount.current > 1) {
        card1.current.isActive = card2.current.isActive = card3.current.isActive = true;
        deactivatedCardCount.current = 0;
      }

      console.log("Correct card! Changing to next level");
      
      return changeLevel();
    }

    // if active and not matching
      // set guessStatus to false
      // set clicked_card Active status to false
      // increase deactivatedCardCount by 1
      // decrease score by 1
      // decrease time by 6 sec

    if (clicked_card.isActive === true && clicked_card.isMatch === false) {
      guessStatus.current = false;
      console.log("guessStatus.current:", guessStatus.current);

      clicked_card.isActive = false;

      deactivatedCardCount.current += 1;
      setScore((s) => s -1);
      setTime((t) => t -5);
      
      setTimeChangeCounter((n) => n +1);
      timeChange.current = -5;

      return console.log("Deactivating wrong card");;
    } 
  }

  /*
  function toggleActive(index) {
    cards.current = {...cards, activeObject: cards.objects[index] };
  }
  function toggleActiveStyles(index) {
    if (cards.current.objects[index] === cards.activeObject) {
      return "box active"
    } else {
      return "box inactive"
    }
  } */

  function toggleActiveStyles(clicked_card) {
  
    if (clicked_card.isActive === false) {
      return "box inactive"
    } else {
      return "box active"
    }
  }

// Loading initial cards function
  function loadFirstCards() {
    if (currentLevel === 0) { 
      return changeLevel();
    }

    if (gameOver === true) {
      return console.log("Game is over, please click Restart Game to play again")
    }

    return console.log("The game is active and cards are already loaded :)")
  }


// Restart Game actions
  function restartGame() {
    setGameOver(() => false);

    nextLevel.current = 0;
    setCurrentLevel(() => nextLevel.current);

    setScore(() => 0);
    setTime(() => 0);
    deactivatedCardCount.current = 0;
    
    guessStatus.current = true;

    mainCard.current = {
      elements: []
    }
    card1.current = card2.current = card3.current = {
      elements: [],
      isMatch: false,
      isActive: true
    }

    setCards(() => ({
      activeObject: null,
      main: [mainCard.current],
      objects: [card1.current, card2.current, card3.current]
    }));
    
    setGameRestarted((gr) => gr +1);
  }
  
  useEffect(() => {
    changeLevel();

  }, [gameRestarted]);


  return (
  <>
    <button onClick={loadFirstCards}>Load cards</button>

    <div id='cardsArea'>
      <div className='card mainCard'>
        {cards.main.map((element, index) => (
          <div key={index} className="box boxMain">
            <p id='mainCardContent'>mainCard elements:<br></br> {element.elements.join(", ")}</p>
          </div>
        ))}
      </div>
      <div className='card subCards'>
        <div className="subcard-list">
          {cards.objects.map((element, index) => (
            <div key={index} 
            className= {toggleActiveStyles(element)} 
            onClick={ () => { 
              onCardClickHandler(element)} }>
              <p>
                card{index+1} elements:<br></br> {element.elements.join(", ")}
            <br></br><br></br>
                {element.isMatch.toString()}
              </p>
            </div>
          ))}
        </div>
      </div>
      <br></br><br></br><br></br>

      <button onClick={restartGame}>Restart game</button>

      <br></br><br></br><br></br>
      
    </div>
    
    <div className="container-counters">
      <div className="counters">
        <p> Score: {score}</p><br></br>

        <p> Level: {currentLevel}</p>
        <p> mainCard elements: {mainCardElementCount.current}</p>
        <p> subCard elements: {cardElementCount.current}</p>
        <p> matching elements: {matchingElementCount.current}</p>
        <p> deactivatedCardCount: {deactivatedCardCount.current}</p>
        <br></br>

        <Timer changeTimeCounter={timeChangeCounter} timeChange={timeChange.current} />
        <p> guessStatus: {guessStatus.current.toString()}</p>

      </div>
    </div>
    
    </>

  )

}

export default Game;


/* 

 <CardList subcards={cards.current.objects} 
        toggleActiveStyles={toggleActiveStyles}
        onCardClickHandler={onCardClickHandler} title="Subcards:" />

<div className='card subCards'>
        {cards.current.objects.map((element, index) => (
            <div key={index} className='{toggleActiveStyles(index)}' onClick={() => { toggleActive(index); } }>
              <p>subCard elements: {element.elements.join(", ")}</p>
            </div>
          ))}
      </div>
*/

