import React, { Fragment } from 'react'; // So it doesn't create a unnecessary node element. **Only available in react 16+
import styles from './MenuText.module.css';

export const Credits = () => (
  <div className={styles.credits}>
    <p>
      <h3>Game made by:</h3>
      <h5>Kristi Pruul - Project manager</h5>
      <h5>Renida Lumiste - Design</h5>
      <h5>Krister Sepp - Back-end development/tester</h5>
      <h5>Valmar Parts - Front-end development/tester</h5>
    </p>
  </div>
);

export default Credits;
