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
import { useEffect } from "react";

import useSound from 'use-sound';
import gameBackgroundFast from '../assets/sounds/backgroundFast.mp3';
// import gameBackgroundEnded from '../assets/sounds/gameBackground.mp3';

import gameOver from '../assets/sounds/gameOver.mp3';
import flashCard from '../assets/sounds/flashCard.mp3';

import gameOverV2 from '../assets/sounds/custom/gameOver.wav';
import flashCardV2 from '../assets/sounds/custom/nextLevel3–flashcard.wav';
import CountersTertiary from './CountersTertiary';


const GameWithStores = () => {
  const navigate = useNavigate();

  const {
    gameState,
    level,
    levelSettings,
    toggleSound,
    setFlashcard,
    timeLeftBonus,
    timeLeft,
    resetCounters,
    soundState,
    setBackgroundSoundToFalse,
    toggleBackgroundSound
  } = useStoreSlices();

  // console.log("gameState from GameWithStores:", gameState);
  // console.log("backgroundSoundState from GameWithStores:", backgroundSoundState);
  // console.log("soundState from GameWithStores:", soundState);


// ------------------------------------
// !!! Do not change this sound part here, it works !!!

  const [playGameOver] = useSound(gameOverV2, { soundEnabled: soundState, volume: 0.7 });
  const [playFlashcard] = useSound(flashCardV2, { soundEnabled: soundState, volume: 0.4 });
  const [playBackground, { stop }] = useSound(gameBackgroundFast, {
    interrupt: true,
    soundEnabled: soundState,
    loop: true
  });
  
  useMemo(() => {
    if (!soundState) return stop();
    playBackground();
  }, [playBackground, soundState]);

// ------------------------------------
// ------------------------------------


useEffect(() => {
    // if (gameState === 'flashcard') playFlashcard();
    if (gameState === 'ended') playGameOver();
  }, [gameState])


  const content = useMemo(() => {
    setFlashcard(levelSettings[level].showFlashcard);
    return <ShowContentWithStores />
  }, [level]);

  const contentCountersPrimary = useMemo(() => {
    if (
      gameState === 'running' ||
      gameState === 'flashcard' ||
      gameState === 'notStarted' ||
      gameState === 'paused' ||
      gameState === 'ended'

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
          <div className={styles.splashBtn}>
            <Button
              onClick={() => {
                navigate('/');
                resetCounters();
                setBackgroundSoundToFalse();
                stop();
              }}
              label='Exit'
            />
          </div>
        </div>
        <div className={styles.gameStatsPrimary}>
          {contentCountersPrimary}
          <SoundButton 
          onClick={() => {
          toggleSound(); 
          toggleBackgroundSound();
        }} 
          soundOn={soundState} />
        </div>
      </div>
      <div className={styles.gameStatsSecondary}>
        {contentCountersSecondary}
      </div>
    </div>
  );
};

export default GameWithStores;
