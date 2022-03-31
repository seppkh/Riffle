import React from "react";
import styles from "./TiltedScreen.module.css";

const TiltedScreen = ({ children }) => {
  return (
    <div className={styles.ScreenShadow}>
      <div className={styles.TiltedScreen}>{children}</div>
    </div>
  );
};

export default TiltedScreen;
