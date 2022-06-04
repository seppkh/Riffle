import useStoreSlices from '../store/rootSliceStore';
import SubCardWithStores from './SubCardWithStores';
import './Subcards.css';

const SubCardsWithStores = () => {
  const {
    gameState,
  } = useStoreSlices();

  console.log("gameState from SubCardsWithStores:", gameState);

  const { card1, card2, card3 } = useStoreSlices();

  return (
    <>
      <SubCardWithStores card={card1} />

      <SubCardWithStores card={card2} />

      <SubCardWithStores card={card3} />
    </>
  );
};

export default SubCardsWithStores;
