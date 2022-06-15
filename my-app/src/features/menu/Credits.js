import React, { Fragment } from 'react'; // So it doesn't create a unnecessary node element. **Only available in react 16+
import styles from './MenuText.module.css';

export const Credits = () => (
  <div className={styles.credits}>
    <p>
      <h3>Game made by:</h3>
      <p>Kristi Pruul - Project manager</p>
      <p>Renida Lumiste - Design</p>
      <p>Krister Sepp - Back-end development/tester</p>
      <p>Valmar Parts - Front-end development/tester</p>
    </p>
  </div>
);

export default Credits;
