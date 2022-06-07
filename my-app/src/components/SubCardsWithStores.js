import useStoreSlices from '../store/rootSliceStore';
import SubCardWithStores from './SubCardWithStores';
import './Subcards.css';

const SubCardsWithStores = ({ elementsColors }) => {
  const {
    gameState,
  } = useStoreSlices();

  console.log("gameState from SubCardsWithStores:", gameState);

  const { card1, card2, card3 } = useStoreSlices();

  return (
    <>
      <SubCardWithStores card={card1} elementsColors={elementsColors} />

      <SubCardWithStores card={card2} elementsColors={elementsColors}/>

      <SubCardWithStores card={card3} elementsColors={elementsColors}/>
    </>
  );
};

export default SubCardsWithStores;
