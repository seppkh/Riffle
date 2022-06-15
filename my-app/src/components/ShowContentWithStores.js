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
      navigate('/')
    }
  }, []);

  const content = useMemo(() => {
    console.log("gameState from ShowContentWithStores:", gameState);

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
  
    
    if (gameState === 'running') {
      if (showFlashcard) {
        setFlashcard(true);
        resetTimeLeft();
        setGameStateToFlashcard();
      }

      return (
        <>
        <div className='gameBoard'>
            
          <CardLayout />
          <button onClick={togglePause}>Pause</button>
        </div>
        </>
  
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
          <div className={styles.gameEndText}>
            <img src={logoEnded} alt='endedImg' height='250px' />
            <h2>Game over – {reason}</h2>
            <p>
              Your final score is {score} {suffix}
            </p>
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
    
  }, [gameState, level, timeLeft, timeLeftBonus])


  return <>{content}</>;
};

export default ShowContentWithStores;
