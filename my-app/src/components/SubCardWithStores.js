import OnCardClickHandler from "../utils/cardClickFunc";

const SubCardWithStores = ({ card }) => {

  return (
  <>
    <div 
    className=''
    onClick={ () => OnCardClickHandler(card) }>
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