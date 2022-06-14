import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuItem from './MenuItem';
import styles from './Menu.module.css';
import useStoreSlices from '../../store/rootSliceStore';

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

  const { setGameStateToNotStarted } = useStoreSlices();

  return (
    <ul className={styles.Menu}>
      <MenuItem
        onClick={() => {
          setGameStateToNotStarted();
          navigate('/game');
        }}
        label={'Play Game'}
      ></MenuItem>
      <MenuItem
        onClick={() => {
          navigate('/instructions');
        }}
        label={'Instructions'}
      ></MenuItem>
      <MenuItem
        onClick={() => {
          navigate('/credits');
        }}
        label={'Credits'}
      ></MenuItem>
    </ul>
  );
};

export default Menu;
