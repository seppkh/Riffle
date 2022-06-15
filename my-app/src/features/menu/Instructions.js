import React, { Fragment } from 'react'; // So it doesn't create a unnecessary node element. **Only available in react 16+
import styles from './MenuText.module.css';

export const Instructions = () => (
  <div className={styles.instructions}>
    <h3>Game</h3>
    In the gameplay, you will have 1 (one) main card on the top and 3 (three)
    smaller cards on the bottom.<br/><br/> <strong>Your goal is to find the correct card from
    three bottom cards.</strong><br/><br/>
    Each card has a number of elements. On the
    correct bottom card, a certain amount of elements are matching to elements
    on the main top card. You have to click on the correct bottom card that has
    those matching elements.<br/><br/>
    Keep playing and the number of matching elements
    will increase. Also, colors will become more similar over time.{' '}

    <h3>Levels</h3> Game is divided into rounds of 5 to 10 levels. Each round
    has the same amount of matching elements – you will see this number when
    playing. Total number of elements on cards may vary.<br/><br/> When you click on the
    correct card, you go level up. When you click on a wrong card, you lose a
    life, but can keep guessing. 

    <h3>Lives</h3> You have 3 lives in total. When
    you lose all lives, the game is over. 
    
    <h3>Score</h3> Each correct card gives you 1
    point. You don’t lose points when you click on a wrong card.

    <h3>Time</h3> Each round starts with 30 seconds on the clock. When you click
    on the correct card, you get 5 extra seconds. When you click on a wrong
    card, you lose 3 seconds. Be careful not to click on the wrong cards! When
    you run out of time, the game is over.

    <h3>Bonus</h3>
    Each level has a bonus timer. If you find the correct card within 3 seconds,
    you get 3 points instead of 1!
    
    <h3>End of the game</h3> Game ends when you
    run out of lives or time.
  </div>
);

export default Instructions;
