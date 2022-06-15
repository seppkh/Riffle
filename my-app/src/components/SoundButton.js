import React from 'react';
import styles from './SoundButton.module.css';
import logoSoundOn from '../assets/sound-icon/loud.png';
import logoSoundOff from '../assets/sound-icon/mute.png';

const SoundButton = ({ soundOn, onClick }) => {
  return (
    <button className={styles.soundBtn} onClick={onClick}>
      {soundOn ? (
        <img src={logoSoundOn} alt='sound on' height='90px' />
      ) : (
        <img src={logoSoundOff} alt='sound off' height='90px' />
      )}
    </button>
  );
};

export default SoundButton;
