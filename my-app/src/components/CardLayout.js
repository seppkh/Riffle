import React from 'react';
import { useEffect, useState } from 'react';
import styles from './CardLayout.module.css';

const CardLayout = () => {
  const Elements = [
    {
      image: 'test',
    },
    {
      image: 2,
    },
    {
      image: 3,
    },
    {
      image: 4,
    },
    {
      image: 5,
    },
    {
      image: 6,
    },
    {
      image: 7,
    },
    {
      image: 8,
    },
    {
      image: 9,
    },
    {
      image: 10,
    },
  ];

  const [filteredList, setFilteredList] = useState(Elements);

  return (
    <>
      <div className={styles.CardsWrapper}>
        <>
          <div className={styles.MainCardWrapper}>
            <div className={styles.MainCard}>1</div>
          </div>

          <div className={styles.BottomCards}>
            <div className={styles.LeftCard}>2</div>
            <div className={styles.CenterCard}>3</div>
            <div className={styles.RightCard}>4</div>
          </div>
        </>
      </div>
    </>
  );
};

export default CardLayout;
