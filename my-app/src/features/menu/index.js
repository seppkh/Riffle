import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuItem from './MenuItem';
import styles from './Menu.module.css';
import useStoreSlices from '../../store/rootSliceStore';

import useSound from 'use-sound';
import menuBackground from '../../assets/sounds/gameBackground.mp3';

import { useMemo } from "react";
import SoundButton from '../../components/SoundButton';

const menuOptions = [
  {
    label: 'Instructions',
  },
  {
    label: 'Credits',
  },
];


const Menu = () => {
  const navigate = useNavigate();

  const {
    gameState,
    setGameStateToNotStarted,
    soundState,
    sameSoundstate
  } = useStoreSlices();


// ------------------------------------
// !!! Do not change this sound part here, it works !!!

  const [playMenuBackground, { stop }] = useSound(menuBackground, {
    interrupt: true,
    soundEnabled: soundState,
    loop: true
  }); 

  useEffect(() => {
    setTimeout(() => {
      playMenuBackground();
    }, 2);
  }, [playMenuBackground]);
  
  useMemo(() => {
    if (!soundState) return stop();
    playMenuBackground();
  }, [playMenuBackground, soundState]);

// ------------------------------------


  // console.log("gameState1 from Menu:", gameState);

  return (
    <ul className={styles.Menu}>
    <MenuItem
      onClick={() => {
        setGameStateToNotStarted();
        navigate('/game');
        stop();
      }}
      label={'Play Game'}
    ></MenuItem>
    <MenuItem
      onClick={() => {
        navigate('/instructions');
        sameSoundstate();
      }}
      label={'Instructions'}
    ></MenuItem>
    <MenuItem
      onClick={() => {
        navigate('/credits');
        sameSoundstate();
      }}
      label={'Credits'}
    ></MenuItem>
    </ul>
  );
};

export default Menu;
