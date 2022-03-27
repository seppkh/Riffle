import React, { useState, useEffect, useRef } from 'react';
import createSets from '../utils/createElementSets';
import shuffle from '../utils/shuffleSubCardOrder';
import './Game.css';
import CardList from './CardList';
import level_settings from '../assets/levelSettings';

const Game = () => {

  let gameOver = useRef(true);
    // let [gameOver, setGameOver] = useState(true)
  let score = useRef(0);
  let nextLevel = useRef(0);
  let [currentLevel, setCurrentLevel] = useState(0);
  let time = useRef(0);

  let counters = useRef([]);
  let mainCardElementCount = useRef(0);
  let cardElementCount = useRef(0);
  let matchingElementCount = useRef(0);
  let deactivatedCardCount = useRef(0);

  let guessStatus = useRef(true);
    // let [guessStatus, setGuessStatus] = useState(true)

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

  const ELEMENTS = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]

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

    console.log("currentLevel:",currentLevel);
    console.log("nextLevel.current:",nextLevel.current);

      // set guessStatus to false
      guessStatus.current = false;

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

      cards.current = {
        activeObject: null,
        main: [mainCard.current],
        objects: [card1.current, card2.current, card3.current]
      };
    
      // set time to full time value (30 sec)
      time.current = 30;

      // set gameOver to false
      gameOver.current = false;

  }, [currentLevel])

  function changeLevel() {
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
  

  const onCardClickHandlerInvalid = (clicked_card) => {
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
      changeLevel()

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
            <p id='mainCardContent'>mainCard elements:<br></br> {element.elements.join(", ")}</p>
          </div>
        ))}
      </div>
      <div className='card subCards'>
        <CardList subcards={cards.current.objects} title="Subcards:" />
      </div>

      <br></br><br></br><br></br>
      
    </div>
    
    <div className="container-counters">
      <div className="counters">
        <p> Score: {score.current}</p><br></br>
        <p> Level: {currentLevel}</p>
        <p> mainCard elements: {mainCardElementCount.current}</p>
        <p> subCard elements: {cardElementCount.current}</p>
        <p> matching elements: {matchingElementCount.current}</p><br></br>

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
              <p>subCard elements: {element.elements.join(", ")}</p>
            </div>
          ))}
      </div>
*/
export default Game;