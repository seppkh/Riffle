import useStoreCards from "../store/cardStore";

const SubCardWithStores = (title) => {

  const onCardClickHandler = useStoreCards(state => state.onCardClickHandler);

  const card1 = useStoreCards(state => state.card1);
  const card2 = useStoreCards(state => state.card2);
  const card3 = useStoreCards(state => state.card3);

  const cards = {
    card1,
    card2, 
    card3
  }

  let subCard = {};

  for (let [key, value] of Object.entries(cards)) {
    if (key === title) {
      subCard = value ;
    }
   }

  return (
  <>
    <div 
    className=''
    onClick={ () => onCardClickHandler(subCard) }>
      <p>
        subCard elements:<br></br> {subCard.elements.join(", ")}
    <br></br><br></br>
        {subCard.isMatch.toString()}
      </p>
    </div>
  </>
  )
}

export default SubCardWithStores;