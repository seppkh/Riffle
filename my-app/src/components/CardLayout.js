import SubCardsWithStores from './SubCardsWithStores';
import useStoreSlices from '../store/rootSliceStore';
import Card from './Card';

import styles from './CardLayout.module.css';

const ShowCardsWithStores = () => {
  const mainCard = useStoreSlices((state) => state.mainCard);

  return (
    <div className={styles.CardsWrapper}>
      <div className={styles.MainCard}>
        <Card isMain elements={mainCard.elements} />
      </div>

      <div className={styles.BottomCards}>
        <SubCardsWithStores />
      </div>
    </div>
  );
};

export default ShowCardsWithStores;
