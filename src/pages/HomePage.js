import React from "react";
import styles from "./HomePage.module.css";
import { Form } from "./../components/form/Form";

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Form />
    </div>
  );
};

export default HomePage;
