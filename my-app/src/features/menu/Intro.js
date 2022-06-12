import React, { Fragment } from 'react'; // So it doesn't create a unnecessary node element. **Only available in react 16+
import styles from './MenuText.module.css';
import mascot from '../../assets/gifs/happy_yellow.gif';

export const Intro = () => (
  <Fragment>
    {' '}
    <div className={styles.intro}>
      <p>Enjoy and have fun!</p>
      <img alt='happy mascot' src={mascot} height='250px' />
    </div>
  </Fragment>
);

export default Intro;
