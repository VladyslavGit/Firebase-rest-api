import React from "react";
import ReactPlayer from "react-player";
import styles from "./FeaturesPage.module.css";

export const FeaturesPage = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=uqc1xE2H9Wg"
      playing
      controls
      light={require("../assets/images/study.jpg")}
      className={styles.player}
      width="100%"
      height="calc(100% - 117px)"
    />
  );
};
