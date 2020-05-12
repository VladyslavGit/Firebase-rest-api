import React from "react";
import styles from "./AboutPage.module.css";

export const AboutPage = () => {
  return (
    <img
      src={require("../assets/images/about.jpg")}
      alt="about"
      className={styles.img}
    />
  );
};
