import { useNavigate } from 'react-router-dom';
import useStoreSlices from '../store/rootSliceStore';
import CardLayout from './CardLayout';
import logoFlashcard from '../assets/gifs/R_wink.gif';
import logoGameStart from '../assets/gifs/happy_purple.gif';
import logoGamePaused from '../assets/gifs/R_two_eyes.gif';
import logoEnded from '../assets/letters/heart.svg';
import styles from './ShowContentWithStores.module.css';

import { checkHighScore, showHighScores } from '../utils/saveScoresFunc';

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
    showFlashcard,
    setFlashcard,
    setGameStateToFlashcard,
    resetTimeLeft,
    setGameStateToRunning,
    timeLeft,
    timeLeftBonus,
    lives,
    setGameStateToEnded,
  } = useStoreSlices();

  useEffect(() => {
    if (gameState === 'menu') {
      navigate('/');
    }
  }, []);

  const content = useMemo(() => {
    // console.log('gameState from ShowContentWithStores:', gameState);

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
      console.log("Setting up gameplay");

      return (
        <div className={styles.splashScreen}>
          <img src={logoGameStart} alt='flashcardImg' height='250px' />
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

    if (gameState === 'flashcard') {

      if (level !== 56) {
        let flashcardText = levelSettings[level].text;

        return (
          <div className={styles.splashScreen}>
            <img src={logoFlashcard} alt='flashcardImg' height='250px' />
            <h2>{flashcardText}</h2>
            <div className={styles.splashBtn}>
              <Button
                onClick={() => {
                  setGameStateToRunning();
                  resetTimeLeft();
                }}
                label='Continue'
              />
            </div>
          </div>
        );
      }
      else {
        let flashcardText = levelSettings[level].text;

        return (
          <div className={styles.splashScreen}>
            <img src={logoFlashcard} alt='flashcardImg' height='250px' />
            <h2>{flashcardText}</h2>
            <div className={styles.splashBtn}>
              <Button
                onClick={() => {
                  setGameStateToEnded();
                  // resetTimeLeft();
                }}
                label='End game'
              />
            </div>
          </div>
        );
      }
    }

    if (gameState === 'running') {
      if (showFlashcard) {
        setFlashcard(true);
        resetTimeLeft();
        setGameStateToFlashcard();
      }

      return (
        <div>
          <div className={styles.gameBoard}>
            <CardLayout />
          </div>
          <div className={styles.splashBtn}>
            <Button onClick={togglePause} label='Pause' />
          </div>
        </div>
      );
    }

    if (gameState === 'paused') {
      return (
        <div className={styles.splashScreen}>
          <img src={logoGamePaused} alt='flashcardImg' height='250px' />
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
      // checkHighScore(score, scoreEntered, toggleScoreEntered);

      console.log("Game over – final score:", score);

      let endingMessage = '';
      let suffix = 'points';
      let reason = '';

      if (level === 56) reason = 'you beat all levels!';
      if (lives === 0) reason = 'you ran out of lives!';
      if (timeLeft <= 0) reason = 'you ran out of time!';

      if (score === 1) suffix = 'point';

      switch (true) {
        case (score <= 5):
          endingMessage = "A little disappointing if I'm honest...";
          break;
        case (score <= 15):
          endingMessage = "More than nothing, less than something...";            
          break;
        case (score <= 25):
          endingMessage = "Quite okay, but with another try you can surely do much better!";
          break;
        case (score <= 35):
          endingMessage = "Nicely done! You're quite good at this game!";
          break;
        case (score <= 45):
          endingMessage = "Excellent! Nothing misses your eagle vision!";
          break;
        case (score <= 55):
          endingMessage = "Superstar! You rocked it!";
          break;
        case (score > 56):
          endingMessage = "Wow!! You're a natural pro at this game!";
          break;
        default:
          endingMessage = "";
          break;
      }

      return (
        <div className={styles.splashScreen}>
          <div className={styles.gameEndText}>
            <img src={logoEnded} alt='endedImg' height='250px' />
            <h2>Game over – {reason}</h2>
            <p>Your final score is: </p>
            <h1>{score}</h1>
            <p>{endingMessage}</p>

            {showHighScores()}
          </div>

          <p>Surely you can beat your own score...</p>
          <div className={styles.splashBtn}>
            <Button
              onClick={() => {
                resetCounters();
                setGameStateToNotStarted();
                unAssignCards();
              }}
              label='Play again'
            />
          </div>
        </div>
      );
    }
  }, [gameState, level, timeLeft, timeLeftBonus]);


  return <>{content}</>;
};

export default ShowContentWithStores;
