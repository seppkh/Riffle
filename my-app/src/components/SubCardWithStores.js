import OnCardClickHandler from "../utils/cardClickFunc";
import useStoreSlices from "../store/rootSliceStore";


const SubCardWithStores = ({ card }) => {

  const useStoreSlicesRead  = useStoreSlices();

  return (
  <>
    <div 
    className=''
    onClick={ () => OnCardClickHandler(card, useStoreSlicesRead) }>
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