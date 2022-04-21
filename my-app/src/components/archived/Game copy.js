import React, { useState, useEffect, useRef } from 'react';
import createSets from '../../utils/createElementSets';
import shuffle from '../../utils/shuffleSubCardOrder';
import './Game.css';
import level_settings from '../../assets/levelSettings';

const Game = () => {

  let gameOver = useRef(true);
    // let [gameOver, setGameOver] = useState(true)
  let [score, setScore] = useState(0);
  let [time, setTime] = useState(30);

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

  let cards = useRef({
    activeObject: null,
    main: [mainCard.current],
    objects: [card1.current, card2.current, card3.current]
  });


  const LEVEL_SETUP = useRef(level_settings);

  useEffect(() => {

    changeLevel();
  }, [])

  
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

    // console.log("currentLevel:",currentLevel);
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

      /* console.log("counters.current:", counters.current);
      console.log("mainCardElementCount:", mainCardElementCount.current);
      console.log("cardElementCount:", cardElementCount.current);
      console.log("matchingElementCount:", matchingElementCount.current); */

      // create sets of elements with isMatch and active flags for each card
      cardsContent.current = createSets(mainCardElementCount.current, cardElementCount.current, matchingElementCount.current);

      // appoint set of elements to mainCard
      mainCard.current = cardsContent.current.mainCard;

      // suffle subcards values in cardsContent and store in new array
      let subCards = [];
      subCards.push(cardsContent.current.card1, cardsContent.current.card2, cardsContent.current.card3);
      let subCardsShuffle = shuffle(subCards);

      // appoint set of elements to subcards 
      card1.current = subCardsShuffle[0];
      card2.current = subCardsShuffle[1];
      card3.current = subCardsShuffle[2];

      console.log("mainCard.current from useEffect", mainCard.current);
      console.log("card1.current from useEffect", card1.current);
      console.log("card2.current from useEffect", card2.current);
      console.log("card3.current from useEffect", card3.current);

      cards.current = {
        activeObject: null,
        main: [mainCard.current],
        objects: [card1.current, card2.current, card3.current]
      };

      // set gameOver to false
      gameOver.current = false;

  }, [currentLevel]) // THIS changes every time from true to false or from false to true!


  function changeLevel() {

    if (guessStatus.current === false ) return console.log("Error: can't change level because guessStatus in not true");

    nextLevel.current += 1;
    setCurrentLevel(nextLevel.current-1);
    
    mainCard.current = cards.current.main[0];
    card1.current = cards.current.objects[0];
    card2.current = cards.current.objects[1];
    card3.current = cards.current.objects[2];

    console.log("-----");
    console.log("mainCard.current:", mainCard.current);
    console.log("card1.current:", card1.current);
    console.log("card2.current:", card2.current);
    console.log("card3.current:", card3.current);

  }


  const onCardClickHandler = (clicked_card) => {

    // disable clicking on card if currentLeveL is not yet 1
    if (currentLevel === 0) return console.log("No cards loaded yet - nothing to react to");

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
      setTime((t) => t +6);

      if (deactivatedCardCount.current > 1) {
        card1.current.isActive = card2.current.isActive = card3.current.isActive = true;
        deactivatedCardCount.current = 0;
      }

      console.log("Changing to next level");
      
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
    // console.log("clicked_card style:", clicked_card)
  
    if (clicked_card.isActive === false) {
      return "box inactive"
    } else {
      return "box active"
    }
  }


  return (
  <>
    <button onClick={changeLevel}>Load cards</button>

    <div id='cardsArea'>
      <div className='card mainCard'>
        {cards.current.main.map((element, index) => (
          <div key={index} className="box boxMain">
            <p id='mainCardContent'>mainCard elements:<br></br> {element.elements.join(", ")}</p>
          </div>
        ))}
      </div>
      <div className='card subCards'>
        <div className="subcard-list">
          {cards.current.objects.map((element, index) => (
            <div key={index} 
            className= {toggleActiveStyles(element)} 
            onClick={ () => {onCardClickHandler(element)} }>
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

        <p> Time: {time}</p>
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

