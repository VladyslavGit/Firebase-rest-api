import React from "react";
import styles from "./AboutPage.module.css";

export const AboutPage = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src={require("../assets/images/about.jpg")}
        alt="about"
        className={styles.img}
      />
    </div>
  );
};
