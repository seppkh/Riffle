import clsx from "clsx";
import React, { useMemo } from "react";
import styles from "./MenuItem.module.css";


const MenuItem = ({ label, active, onClick }) => {
  const paddedLabel = useMemo(() => {
    if (active) {
      return `(${label})`;
    }
    return label;
  }, [active, label]);

  return (
    <li
      className={clsx(styles.MenuItem, {
        [styles.active]: active
      })}
      onClick={onClick}
    >
      {paddedLabel}
    </li>
  );
};

export default MenuItem;
