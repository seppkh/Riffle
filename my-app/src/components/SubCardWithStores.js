import OnCardClickHandler from "../utils/cardClickFunc";
import useStoreSlices from "../store/rootSliceStore";
import './Subcard.css';


const SubCardWithStores = ({ card }) => {

  const useStoreSlicesRead  = useStoreSlices();

  return (
  <>
    <div 
    className=''
    onClick={ () => OnCardClickHandler(card, useStoreSlicesRead) }>
      <p className='subcard-elements'>{card.elements.join(", ")}</p>
      <p className='subcard-match'>{ card.isMatch.toString() } </p>
    </div>
  </>
  )
}

export default SubCardWithStores;