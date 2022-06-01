import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './SplashScreenLayout.module.css';

const SplashScreenLayout = () => {
  return (
    <div className={styles.SplashScreen}>
      <Outlet></Outlet>
    </div>
  );
};

export default SplashScreenLayout;
