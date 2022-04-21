import React, { useState, useEffect, useRef } from 'react';
import './Game.css';
import level_settings from '../assets/levelSettings';
import Timer from './Countdown';
import Counters from './Counters';
import ShowCards from './ShowCards';
import createSets from '../utils/createElementSets';
import MainCard from './MainCard';
import SubCards from './SubCards';


// START OF CHANGES

const Game = () => {

  let [gameOver, setGameOver] = useState(false);
  let [gameRestartedCounter, setGameRestartedCounter] = useState(0);

  let [score, setScore] = useState(0);
  let [time, setTime] = useState(15);
  let [timeChangeCounter, setTimeChangeCounter] = useState(0);
  let [timeChange, setTimeChange] = useState(0);

  let [currentLevel, setCurrentLevel] = useState(0);
  let [mainCardElementCount, setMainCardElementCount] = useState(0);
  let [cardElementCount, setCardElementCount] = useState(0);
  let [matchingElementCount, setMatchingElementCount] = useState(0);
  let [deactivatedCardCount, setDeactivatedCardCount] = useState(0);

  let [guessStatus, setGuessStatus] = useState(true);

  let [mainCard, setMainCard] = useState({
    elements: [22, 34]
  })
  let [card1, setCard1] = useState({
    elements: [22],
    isMatch: true,
    isActive: true
  })
  let [card2, setCard2] = useState({
    elements: [16],
    isMatch: false,
    isActive: true
  })
  let [card3, setCard3] = useState({
    elements: [7],
    isMatch: false,
    isActive: true
  })

  const LEVEL_SETUP = level_settings;


// load first level
useEffect(() => {

    changeLevel();

}, []);  
  
  
// changeLevel logic and conditions
const changeLevel = () => {
  console.log("gameOver", gameOver)
  console.log("time", time)
  console.log("Timer.timer", Timer.timer)

  console.log("currentLevel", currentLevel)

  if (gameOver === false && time === 0 && currentLevel === 0) setTime(30);

  if (guessStatus === false) return console.log("Error: can't change level because guessStatus in not true");

  setCurrentLevel((prev) => prev +1);

};

  // set number of elements on mainCard
  // set number of elements on subcards
  // set number of matching elements on correct card
useEffect(() => {

  setMainCardElementCount(LEVEL_SETUP[currentLevel].mainCardElementCounter);
  setCardElementCount(LEVEL_SETUP[currentLevel].cardElementCounter);
  setMatchingElementCount(LEVEL_SETUP[currentLevel].matchingElementCounter);

}, [currentLevel, setMainCardElementCount, setCardElementCount, setMatchingElementCount]);


// load new cards after currentLevel is changed and counters set
  const updateCardsContent = () => { 
    console.log("currentLevel in Game.js", currentLevel);

    console.log("mainCardElementCount in Game.js", mainCardElementCount);
    console.log("cardElementCount in Game.js", cardElementCount);
    console.log("matchingElementCount in Game.js", matchingElementCount);


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
      setGuessStatus(true);

      setScore((s) => s +1);
      setTime((t) => t +7);
      
      setTimeChangeCounter((n) => n +1);
      setTimeChange(7);

      if (deactivatedCardCount > 1) {
        setCard1({...card1, isActive: true});
        setCard2({...card2, isActive: true});
        setCard3({...card3, isActive: true});

        setDeactivatedCardCount(0);
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
      setGuessStatus(false);
      console.log("guessStatus:", guessStatus);

      clicked_card.isActive = false;

      setDeactivatedCardCount((prev) => prev +1);
      setScore((s) => s -1);
      setTime((t) => t -5);
      
      setTimeChangeCounter((n) => n +1);
      setTimeChange(-5);

      return console.log("Deactivating wrong card");;
    } 
  }


// Restart Game actions
  function restartGame() {
    setGameOver(false);
    setTimeChangeCounter(-1);

    setCurrentLevel(0);

    setScore(0);
    setTime(0);
    setDeactivatedCardCount(0);
    
    setGuessStatus(true);

    setMainCard({
      elements: []
    });
    setCard1({
      elements: [],
      isMatch: false,
      isActive: true
    });
    setCard2({
      elements: [],
      isMatch: false,
      isActive: true
    });
    setCard3({
      elements: [],
      isMatch: false,
      isActive: true
    });
    
    setGameRestartedCounter((gr) => gr +1);
  }
  
  // if time runs out end game
  useEffect(() => {

    if (Timer.timer <= 0) { 
      setGameOver(true) 
      alert("Game over! Time is over!")
    }
  }, [Timer.timer]); 

  // Loading initial cards function
  /*
  function loadFirstCards() {
    if (currentLevel === 0) { 
      return changeLevel;
    }

    if (gameOver === true) {
      return console.log("Game is over, please click Restart Game to play again")
    }

    return console.log("The game is active and cards are already loaded :)")
  } */

  // change card color
  function toggleActiveStyles(clicked_card) {
    
    if (clicked_card.isActive === false) {
      return "box inactive"
    } else {
      return "box active"
    }
  }

  return (
  <>
    <div id='cardsArea' >

      <ShowCards key="show-cards" title="showcards component"
        mainCard={mainCard}
        setMainCard={setMainCard}
        card1={card1}
        setCard1={setCard1}
        card2={card2}
        setCard2={setCard2}
        card3={card3}
        setCard3={setCard3}
        mainCardElementCount={mainCardElementCount}
        cardElementCount={cardElementCount}
        matchingElementCount={matchingElementCount}
        toggleActiveStyles={toggleActiveStyles}
        onCardClickHandler={onCardClickHandler}
        setGameOver={setGameOver}
        updateCardsContent={updateCardsContent}
        />

    </div>

    <div>
      <button onClick={restartGame}>Restart game</button>
    </div>
  

    <div className="container-counters">
      <div className="counters">
        <Counters key="counters" title="counters component"
        score={score}
        currentLevel={currentLevel}
        mainCardElementCount={mainCardElementCount}
        cardElementCount={cardElementCount}
        matchingElementCount={matchingElementCount}
        deactivatedCardCount={deactivatedCardCount}
        guessStatus={guessStatus}
        gameOver={gameOver}
        />

        <Timer 
          changeTimeCounter={timeChangeCounter} 
          timeChange={timeChange}
          gameRestartedCounter={gameRestartedCounter} />

      </div>
    </div>
    
    </>

  )

}

export default Game;


/* 
  <button onClick={loadFirstCards}>Load cards</button>


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

