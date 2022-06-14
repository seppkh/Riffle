import { useNavigate } from 'react-router-dom';
import useStoreSlices from '../store/rootSliceStore';
import CardLayout from './CardLayout';
import logoFlashcard from '../assets/gifs/R_wink.gif';
import logoEnded from '../assets/gifs/unhappy_yellow.gif';
import styles from './ShowContentWithStores.module.css';

import { checkHighScore, showHighScores } from '../utils/saveScoresFunc';

import useSound from 'use-sound';
import gameBackground from '../assets/sounds/gameBackground.mp3';
import gameOver from '../assets/sounds/gameOver.mp3';
import flashCard from '../assets/sounds/flashCard.mp3';
import { useMemo } from 'react';
import { useEffect } from 'react';
import Button from './Button';

const ShowContentWithStores = () => {
  const navigate = useNavigate();
  const {
    gameState,
    score,
    startGame,
    resetCounters,
    togglePause,
    setGameStateToNotStarted,
    assignCards,
    unAssignCards,
    level,
    levelSettings,
    toggleFlashcard,
    toggleSound,
    soundState,
    showFlashcard,
    setFlashcard,
    setGameStateToFlashcard,
    resetTimeleft,
    setGameStateToRunning,
    timeLeft,
    timeLeftBonus,
    lives,
    setGameStateToEnded,
  } = useStoreSlices();

  /*
  const [playGameOver] = useSound(gameOver, { soundEnabled: soundState });
  const [playFlashcard] = useSound(flashCard, { soundEnabled: soundState });
  const [playBackground, { stop }] = useSound(gameBackground, {
    interrupt: false,
    soundEnabled: soundState,
  }); */

  useEffect(() => {
    if (gameState === 'menu') {
      navigate('/');
    }
  }, []);

  const content = useMemo(() => {
    // console.log("gameState from ShowContentWithStores:", gameState);

    if (showFlashcard) {
      if (level === 1) {
        setFlashcard(false);
        // setGameStateToFlashcard();
      } else {
        setFlashcard(false);
      }
    }

    if (lives <= 0) {
      setGameStateToEnded();
    }

    if (gameState === 'notStarted') {
      //playBackground();

      return (
        <div className={styles.splashScreen}>
          <p>Setting up your gameplay...</p>
          <h2>Click the button to start your game</h2>
          <br />
          <div className={styles.splashBtn}>
            <Button
              onClick={() => {
                resetCounters();
                startGame();
                assignCards();
              }}
              label='Start game'
            />
          </div>
        </div>
      );
    }

    if (gameState === 'paused') {
      return (
        <div className={styles.splashScreen}>
          <h2>Game is paused</h2>
          <p>Needed a break already, yeh?</p>
          <br />
          <h2>Click the button to continue your game</h2>
          <br />
          <div className={styles.splashBtn}>
            <Button onClick={togglePause} label='Continue' />
          </div>
        </div>
      );
    }

    if (gameState === 'ended') {
      // playGameOver();

      // checkHighScore(score, scoreEntered, toggleScoreEntered);

      let endingMessage = '';
      let suffix = 'points';
      let reason = '';

      if (lives === 0) reason = 'you ran out of lives!';
      if (timeLeft <= 0) reason = 'you ran out of time!';

      if (score === 1) suffix = 'point';

      if (score <= 5) endingMessage = "A little disappointing if I'm honest...";
      if (score > 5 && score <= 10) endingMessage = 'Nicely done!';
      if (score > 10 && score <= 20) endingMessage = 'You rocked it!';
      if (score > 20) endingMessage = "Wow! You're a natural pro at this game!";

      return (
        <div className={styles.splashScreen}>
          <img src={logoEnded} alt='endedImg' height='250px' />
          <h2>Game over – {reason}</h2>
          <p>
            Your final score is {score} {suffix}
          </p>
          <h5>{endingMessage}</h5>
          <br />

          {showHighScores()}

          <p>Surely you can beat your own score...</p>
          <div className={styles.splashBtn}>
            <Button
              onClick={() => {
                resetCounters();
                setGameStateToNotStarted();
                unAssignCards();
                toggleSound();
                toggleSound();
              }}
              label='Play again'
            />
          </div>
        </div>
      );
    }

    if (gameState === 'flashcard') {
      /* if (level !== 1)
        playFlashcard();
      */
      let flashcardText = levelSettings[level].text;

      return (
        <div className={styles.splashScreen}>
          <img src={logoFlashcard} alt='flashcardImg' height='250px' />
          <h2>{flashcardText}</h2>
          <div className={styles.splashBtn}>
            <Button
              onClick={() => {
                setGameStateToRunning();
                resetTimeleft();
              }}
              label='Continue'
            />
          </div>
        </div>
      );
    }

    if (gameState === 'running') {
      if (showFlashcard) {
        setFlashcard(true);
        resetTimeleft();
        setGameStateToFlashcard();
      }

      return (
        <div className={styles.gameBoard}>
          <CardLayout />
          <Button onClick={togglePause} label='Pause' />
        </div>
      );
    }
  }, [gameState, level, timeLeft, timeLeftBonus]);

  return <>{content}</>;
};

export default ShowContentWithStores;
