import useStoreSlices from '../store/rootSliceStore';

import useSound from 'use-sound';
import gameBackground from '../assets/sounds/gameBackground.mp3';
import gameOver from '../assets/sounds/gameOver.mp3';
import flashCard from '../assets/sounds/flashCard.mp3';

import guessRight from '../assets/sounds/guessRight.mp3';
import guessWrong from '../assets/sounds/guessWrong.mp3';
import bonusPoint from '../assets/sounds/bonusPoint.mp3';
import { useEffect } from 'react';

const PlaySounds = () => {
  const gameState = useStoreSlices((state) => state.gameState);
  
  const level = useStoreSlices((state) => state.level);
  
  const soundState = useStoreSlices((state) => state.soundState);


  const [playGameOver] = useSound(gameOver, { soundEnabled: soundState });
  const [playFlashcard] = useSound(flashCard, { soundEnabled: soundState });
  const [playBackground, { stop }] = useSound(gameBackground, {
    interrupt: false,
    soundEnabled: soundState,
  });

  console.log("soundState2:", soundState);
  console.log("gameState2:", gameState);


  useEffect(() => {
    if (!soundState) stop();
    if (soundState) playBackground();

  }, [soundState]);

 

  if (gameState === 'menu') ;

  if (gameState === 'notStarted') {
    playBackground();

  }

  if (gameState === 'paused') ;

  if (gameState === 'ended') {
    playGameOver();

  }

  if (gameState === 'flashcard') {
    if (level !== 1)
      playFlashcard();

  }

  if (gameState === 'running')  ;

  return (
    <>
    </>
  );
};

export default PlaySounds;
