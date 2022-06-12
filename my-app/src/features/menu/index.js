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
    label: 'Options',
  },
  {
    label: 'Credits',
  },
];

const Menu = ({ onMenuItemSelect = () => {} }) => {
  const [activeLabel, setActiveLabel] = useState(-1);
  const navigate = useNavigate();

  const { gameState, setGameStateToNotStarted } = useStoreSlices();

  const handleLabelClick = useCallback(
    (label) => {
      setActiveLabel(label);
      onMenuItemSelect(label);
    },
    [activeLabel]
  );

  return (
    <ul className={styles.Menu}>
      <MenuItem
        onClick={() => {
          setGameStateToNotStarted();
          navigate('/game');
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
