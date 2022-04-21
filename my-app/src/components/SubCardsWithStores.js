import useStoreCards from "../store/cardStore";
import SubCardWithStores from "./SubCardWithStores";

const SubCardsWithStores = () => {

  const {card1, card2, card3} = useStoreCards();

  return (
  <>
    <div>
      <SubCardWithStores card= {card1} />

      <SubCardWithStores card= {card2} />

      <SubCardWithStores card= {card3} />
    </div>
  </>
  )
};

export default SubCardsWithStores;