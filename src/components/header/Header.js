import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import ButtonLogout from "./ButtonLogout";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navigationBox}>
          <NavLink exact to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/features" className={styles.link}>
            Features
          </NavLink>
          <NavLink to="/about" className={styles.link}>
            About
          </NavLink>
        </div>
        <ButtonLogout />
      </div>
    </div>
  );
};
