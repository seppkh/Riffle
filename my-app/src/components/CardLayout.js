import { useEffect, useState } from 'react';
import styles from './CardLayout.module.css';
import Card from './Card';

const CardLayout = () => {
  const Elements = [19, 22, 47, 34];

  const [filteredList, setFilteredList] = useState(Elements);

  return (
    <>
      <div className={styles.CardsWrapper}>
        <>
          <div className={styles.MainCardWrapper}>
            <div className={styles.MainCard}>
              <Card isMain elements={Elements} />
            </div>
          </div>

          <div className={styles.BottomCards}>
            <div className={styles.LeftCard}>
              <Card elements={Elements} />
            </div>
            <div className={styles.CenterCard}>
              <Card elements={Elements} />
            </div>
            <div className={styles.RightCard}>
              <Card elements={Elements} />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default CardLayout;
