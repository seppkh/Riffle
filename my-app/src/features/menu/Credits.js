import React, { Fragment } from 'react'; // So it doesn't create a unnecessary node element. **Only available in react 16+
import styles from './MenuText.module.css';

export const Credits = () => (
  <Fragment>
    {' '}
    <div className={styles.credits}>
      <p>
        Game made by: Kristi Pruul - Project manager Renida - Design Back-end
        development/tester - Krister Sepp Front-end development/tester - Valmar
        Parts
      </p>
    </div>
  </Fragment>
);

export default Credits;
