import React, { Fragment } from 'react'; // So it doesn't create a unnecessary node element. **Only available in react 16+
import styles from './MenuText.module.css';

export const Intro = () => (
  <Fragment>
    {' '}
    <div className={styles.intro}>
      <p>Enjoy and have fun!</p>
    </div>
  </Fragment>
);

export default Intro;
