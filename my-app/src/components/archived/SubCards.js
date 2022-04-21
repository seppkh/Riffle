import SubCard from "./SubCard";

const SubCards = (cards, toggleActiveStyles, onCardClickHandler) => {

  const { card1, card2, card3 } = cards;

  return (
    <div>
      <SubCard key="card1" title="card1 component" content={card1} 
      className= { () => toggleActiveStyles(card1)} 
      onClick={ () => onCardClickHandler(card1) }/>

      <SubCard key="card2" title="card2 component" content={card2}
      className= { () => toggleActiveStyles(card2)} 
      onClick={ () => onCardClickHandler(card2) } />

      <SubCard key="card3" title="card3 component" content={card3} 
      className= { () => toggleActiveStyles(card3)} 
      onClick={ () => onCardClickHandler(card3) }/>
    </div>
  )
};

export default SubCards;