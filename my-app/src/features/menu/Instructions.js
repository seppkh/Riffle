import React, { Fragment } from 'react'; // So it doesn't create a unnecessary node element. **Only available in react 16+
import styles from './MenuText.module.css';

export const Instructions = () => (
  <div className={styles.instructions}>
    In the gameplay, you will have 1 (one) main card on the top and 3 (three)
    smaller cards on the bottom. <br /> Your goal is to find the correct card
    from three bottom cards. How exactly? <br />
    Each card has a number of elements. On the correct bottom card, a certain
    amount of elements are matching to elements on the main top card. <br /> You
    have to click on the correct bottom card that has those matching elements.
    <br />
    Keep playing and the number of matching elements will increase. Also, colors
    will become more similar over time. <br /> Levels <br /> Game is divided
    into rounds of 5 to 10 levels. Each round has the same amount of matching
    elements – you will see this number when playing. Total number of elements
    on cards may vary. <br /> When you click on the correct card, you go level
    up. <br /> When you click on a wrong card, you lose a life, but can keep
    guessing. <h3>Lives</h3> You have 3 lives in total. <br /> When you lose all
    lives, the game is over. <br /> Score Each correct card gives you 1 point.{' '}
    <br /> You don’t lose points when you click on a wrong card. <br />
    Time <br /> Each round starts with 30 seconds on the clock. <br /> When you
    click on the correct card, you get 5 extra seconds. <br /> When you click on
    a wrong card, you lose 3 seconds. Be careful not to click on the wrong
    cards! <br /> When you run out of time, the game is over. <br /> Bonus
    <br /> Each level has a bonus timer. If you find the correct card within 3
    seconds, you get 3 points instead of 1! <br /> End of the game <br /> Game
    ends when you run out of lives or time.
  </div>
);

export default Instructions;
