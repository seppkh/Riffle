import useStoreSlices from '../store/rootSliceStore';
import CountersWithStores from './CountersWithStores';
import CardLayout from './CardLayout';
import logoFlashcard from '../assets/flashcardMascot.png';
import logoEnded from '../assets/endedMascot.png';

import { checkHighScore, showHighScores } from "../utils/saveScoresFunc";

import useSound from 'use-sound';
import gameBackground from '../assets/sounds/gameBackground.mp3';
import gameOver from '../assets/sounds/gameOver.mp3';
import flashCard from '../assets/sounds/flashCard.mp3';
import { useMemo } from 'react';


const ShowContentWithStores = () => {
  const gameState = useStoreSlices((state) => state.gameState);

  const score = useStoreSlices((state) => state.score);

  const startGame = useStoreSlices((state) => state.startGame);
  const resetCounters = useStoreSlices((state) => state.resetCounters);
  const togglePause = useStoreSlices((state) => state.togglePause);
  const setGameStateToNotStarted = useStoreSlices((state) => state.setGameStateToNotStarted);

  const assignCards = useStoreSlices((state) => state.assignCards);
  const unAssignCards = useStoreSlices((state) => state.unAssignCards);

  const level = useStoreSlices((state) => state.level);
  const levelSettings = useStoreSlices((state) => state.levelSettings);
  const toggleFlashcard = useStoreSlices((state) => state.toggleFlashcard);

  const toggleSound = useStoreSlices((state) => state.toggleSound);

  const soundState = useStoreSlices((state) => state.soundState);

  const [playGameOver] = useSound(gameOver, { soundEnabled: soundState });
  const [playFlashcard] = useSound(flashCard, { soundEnabled: soundState });
  const [playBackground, { stop }] = useSound(gameBackground, {
    interrupt: false,
    soundEnabled: soundState,
  });

  const showContent = useMemo(() => ChangeContent(gameState, startGame, resetCounters, assignCards, togglePause ), [gameState]);

  
  console.log("gameState3:", gameState);

  return (
    <>
    {showContent}
    </>
  );

};


const ChangeContent = (gameState, startGame, resetCounters, assignCards, togglePause) => {

     /* if (gameState === 'menu') {    
    return (
      <>Hei!
       </>
    );
  } */

  if (gameState === 'notStarted') {
    // playBackground();

    return (
      <>
        <p>Setting up your gameplay...</p>
        <h2>Click the button to start your game</h2>
        <br />
        <button
          onClick={() => {
            resetCounters();
            startGame();
            assignCards();
          }}
        >
          Start game
        </button>
      </>
    );
  }
/*
  if (gameState === 'paused') {
    return (
      <>
        <h2>Game is paused</h2>
        <p>Needed a break already, yeh?</p>
        <br />
        <h2>Click the button to continue your game</h2>
        <br />
        <button onClick={togglePause}>Unpause</button>
      </>
    );
  }

  if (gameState === 'ended') {
    playGameOver();
  
    // checkHighScore(score, scoreEntered, toggleScoreEntered);

    let endingMessage = '';
    let suffix = 'points';

    if (score === 1) suffix = 'point';

    if (score <= 5) endingMessage = "A little disappointing if I'm honest...";
    if (score > 5 && score <= 10) endingMessage = 'Nicely done!';
    if (score > 10 && score <= 20) endingMessage = 'You rocked it!';
    if (score > 20) endingMessage = "Wow! You're a natural pro at this game!";

    return (
      <>
        <img src={logoEnded} alt='endedImg' height='150px' />
        <h2>Game over – you ran out of time!</h2>
        <p>
          Your final score is {score} {suffix}
        </p>
        <h5>{endingMessage}</h5>
        <br />

        {showHighScores()};

        <p>Surely you can beat your own score...</p>
        <button
          onClick={() => {
            resetCounters();
            setGameStateToNotStarted();
            unAssignCards();
            toggleSound();
            toggleSound();

          }}
        >
          Play again
        </button>
      </>
    );
  }

  if (gameState === 'flashcard') {
    if (level !== 1)
      playFlashcard();

    let flashcardText = levelSettings[level].text;

    return (
      <>
        <img src={logoFlashcard} alt='flashcardImg' height='150px' />
        <h2>{flashcardText}</h2>
        <button
          onClick={() => {
            toggleFlashcard();
          }}
        >
          Continue
        </button>
      </>
    );
  } */

  if (gameState === 'running') {
    return (
      <>
      <div className='gameBoard'>
        <CountersWithStores />

        <CardLayout />
        <button onClick={togglePause}>Pause</button>
      </div>
      </>

    );
  }


  };

export default ShowContentWithStores;
