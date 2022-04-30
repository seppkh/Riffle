import useStoreSlices from "../store/rootSliceStore";
import SubCardWithStores from "./SubCardWithStores";
import './Subcards.css';


const SubCardsWithStores = () => {

  const {card1, card2, card3} = useStoreSlices();

  return (
  <>
    <div className='subcards-all'>
      <SubCardWithStores card= {card1} />

      <SubCardWithStores card= {card2} />

      <SubCardWithStores card= {card3} />
    </div>
  </>
  )
};

export default SubCardsWithStores;