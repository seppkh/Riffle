import React, { useState, useCallback } from "react";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";

const menuOptions = [
  {
    label: "Singleplayer"
  },
  {
    label: "Multiplayer"
  },
  {
    label: "Instructions"
  },
  {
    label: "Options"
  },
  {
    label: "Credits"
  },
  {
    label: "Exit"
  }
];

const Menu = ({ onMenuItemSelect = () => {} }) => {
  const [activeLabel, setActiveLabel] = useState(-1);
  const handleLabelClick = useCallback(
    (label) => {
      setActiveLabel(label);
      onMenuItemSelect(label);
    },
    [activeLabel]
  );

  return (
    <ul className={styles.Menu}>
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
