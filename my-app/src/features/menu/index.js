import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuItem from './MenuItem';
import styles from './Menu.module.css';
import useStoreSlices from '../../store/rootSliceStore';

import useSound from 'use-sound';
import menuBackground from '../../assets/sounds/gameBackground.mp3';

import { useMemo } from "react";

const menuOptions = [
  {
    label: 'Instructions',
  },
  {
    label: 'Options',
  },
  {
    label: 'Credits',
  },
];


const Menu = ({ onMenuItemSelect = () => {} }) => {
  const [activeLabel, setActiveLabel] = useState(-1);
  const navigate = useNavigate();

  const {
    gameState,
    setGameStateToNotStarted,
    soundState
  } = useStoreSlices();


// ------------------------------------
// !!! Do not change this sound part here, it works !!!

  const [playMenuBackground, { stop }] = useSound(menuBackground, {
    interrupt: true,
    soundEnabled: soundState,
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


  const handleLabelClick = useCallback(
    (label) => {
      setActiveLabel(label);
      onMenuItemSelect(label);
    },
    [activeLabel]
  );

  console.log("gameState1 from Menu:", gameState);

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
      {menuOptions.map((option) => (
        <MenuItem
          onClick={() => handleLabelClick(option.label)}
          label={option.label}
          key={option.label}
          active={option.label === activeLabel}
        />
      ))}
    </ul>
  );
};

export default Menu;
