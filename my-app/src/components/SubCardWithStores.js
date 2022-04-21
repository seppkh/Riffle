import useStoreCards from "../store/cardStore";

const SubCardWithStores = ({ card }) => {

  const onCardClickHandler = useStoreCards(state => state.onCardClickHandler);

  return (
  <>
    <div 
    className=''
    onClick={ () => onCardClickHandler(card) }>
      <p>
        subCard elements:<br></br> {card.elements.join(", ")}
        {card.isMatch.toString()}
        <br></br><br></br>

      </p>
    </div>
  </>
  )
}

export default SubCardWithStores;