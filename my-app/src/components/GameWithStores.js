import React from 'react';
import useStoreSlices from '../store/rootSliceStore';
import ShowContentWithStores from './ShowContentWithStores';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import CountersSecondary from './CountersSecondary';
import CountersPrimary from './CountersPrimary';
import Button from './Button';
import styles from './GameWithStores.module.css';
import SoundButton from './SoundButton';

const GameWithStores = () => {
  const navigate = useNavigate();

  const {
    gameState,
    level,
    levelSettings,
    toggleSound,
    soundState,
    setFlashcard,
    timeLeftBonus,
    timeLeft,
    resetCounters,
  } = useStoreSlices();

  console.log('gameState from GameWithStores:', gameState);

  const content = useMemo(() => {
    setFlashcard(levelSettings[level].showFlashcard);

    return <ShowContentWithStores />;
  }, [level]);

  const contentCountersPrimary = useMemo(() => {
    if (
      gameState === 'running' ||
      gameState === 'flashcard' ||
      gameState === 'notStarted'
    )
      return <CountersPrimary />;
  }, [gameState]);

  const contentCountersSecondary = useMemo(() => {
    if (gameState === 'running') return <CountersSecondary />;
  }, [gameState, timeLeft, timeLeftBonus]);

  return (
    <div className={styles.gameScreen}>
      <div className={styles.game}>{content}</div>
      <div className={styles.btntoolbar}>
        <div className={styles.leftside}>
          <Button
            onClick={() => {
              navigate('/');
              resetCounters();
            }}
            label='Exit'
          />
        </div>
        <div className={styles.rightside}>
          <SoundButton onClick={toggleSound} soundOn={soundState} />
        </div>
      </div>
      <div className={styles.gameStats}>
        <div className={styles.countersPrimary}>{contentCountersPrimary}</div>
        <div className={styles.countersSecondary}>
          {contentCountersSecondary}
        </div>
      </div>
    </div>
  );
};

export default GameWithStores;
