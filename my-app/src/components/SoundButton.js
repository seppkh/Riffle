import React from 'react';
import styles from './SoundButton.module.css';
import { ReactComponent as IconSoundOff } from '../assets/sound-icon/mute.svg';
import { ReactComponent as IconSoundOn } from '../assets/sound-icon/loud.svg';

const SoundButton = ({ soundOn, onClick }) => {
  return (
    <button className={styles.soundBtn} onClick={onClick}>
      {soundOn ? <IconSoundOn /> : <IconSoundOff />}
    </button>
  );
};

export default SoundButton;
