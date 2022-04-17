import createSets from '../utils/createElementSets';
import shuffle from '../utils/shuffleSubCardOrder';
import MainCard from './MainCard';
import SubCards from './SubCards';

const ShowCards = (props) => {

  const { 
    mainCard, setMainCard,
    card1, setCard1,
    card2, setCard2,
    card3, setCard3,
    mainCardElementCount,
    cardElementCount,
    matchingElementCount,
    toggleActiveStyles,
    onCardClickHandler,
    setGameOver,
  } = props;

  console.log("mainCardElementCount in ShowCards.js", mainCardElementCount);
  console.log("cardElementCount in ShowCards.js", cardElementCount);
  console.log("matchingElementCount in ShowCards.js", matchingElementCount);

  let cardsContent = createSets(mainCardElementCount, cardElementCount, matchingElementCount);
  console.log("cardsContent in ShowCards.js:",cardsContent);


  // appoint set of elements to mainCard
  setMainCard(cardsContent.mainCard);
  console.log("mainCard in ShowCards.js:", mainCard);


  // suffle subcards values in cardsContent and store in new array
  let subCards = [];
  subCards.push(cardsContent.card1, cardsContent.card2, cardsContent.card3);
  let subCardsShuffle = shuffle(subCards);

  // appoint set of elements to subcards 
  setCard1(subCardsShuffle[0]);
  setCard2(subCardsShuffle[1]);
  setCard3(subCardsShuffle[2]);

  console.log("card1 in ShowCards.js:", card1);
  console.log("card2 in ShowCards.js:", card2);
  console.log("card3 in ShowCards.js:", card3);

  // set gameOver to false
  setGameOver(false);


  return (
    <div>
      <MainCard key="mainCard" title="mainCard component" content={mainCard}/>

      <SubCards key="subCards" title="subCards component" card1={card1} card2={card2} card3={card3} toggleActiveStyles={toggleActiveStyles} 
      onCardClickHandler={onCardClickHandler}/>
    </div>
  )
}

export default ShowCards;