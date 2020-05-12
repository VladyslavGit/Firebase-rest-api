import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navigationBox}>
          <NavLink exact to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/about" className={styles.link}>
            About
          </NavLink>
        </div>
        <button type="button" className={styles.signInBtn}></button>
      </div>
    </div>
  );
};
