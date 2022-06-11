import SubCardsWithStores from './SubCardsWithStores';
import useStoreSlices from '../store/rootSliceStore';
import Card from './Card';

import styles from './CardLayout.module.css';
import { useMemo } from 'react';
import { iconsLength } from './Icons.js';
import selectColorSetsFunc from '../utils/selectColorSetsFunc';
import setColorForEachElement from '../utils/setColorForEachElementFunc';

const ShowCardsWithStores = () => {

  const {
    mainCard,
    level
  } = useStoreSlices();

  // console.log("gameState from CardLayout:", gameState);

  const colorSet = selectColorSetsFunc(level);
  const elementsColors = setColorForEachElement(iconsLength, colorSet)
  // console.log("colorSet from CardLayout.js:", colorSet)
  // console.log("elementsColors from CardLayout.js:", elementsColors)


  const contentMainCard = useMemo(() => {

    return <Card isMain elements={mainCard.elements} elementsColors={elementsColors} />
  }, [level]);

  const contentBottomCards = useMemo(() => {

    return <SubCardsWithStores elementsColors={elementsColors} />
  }, [level]);

  return (
    <>
    <div className={styles.CardsWrapper}>
      <div className={styles.MainCard}>
        {contentMainCard}
      </div>

      <div className={styles.BottomCards}>
        {contentBottomCards}
      </div>
    </div>
    </>
  );
};

export default ShowCardsWithStores;
