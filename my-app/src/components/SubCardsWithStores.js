import useStoreSlices from '../store/rootSliceStore';
import SubCardWithStores from './SubCardWithStores';
import './Subcards.css';
import { useMemo } from 'react';

const SubCardsWithStores = ({ elementsColors }) => {
  const {
    timeLeft,
    timeLeftBonus
  } = useStoreSlices();


  const { card1, card2, card3 } = useStoreSlices();

  const content = useMemo(() => { 
    // console.log("gameState from SubCardsWithStores:", gameState);

    return (
      <>
        <SubCardWithStores card={card1} elementsColors={elementsColors} />
  
        <SubCardWithStores card={card2} elementsColors={elementsColors}/>
  
        <SubCardWithStores card={card3} elementsColors={elementsColors}/>
      </>
    );

  }, [timeLeft, timeLeftBonus]) 

  return (
    <>
    {content}
    </>
  ); 
};

export default SubCardsWithStores;
