import React from "react";
import { Form } from "./form/Form";
import styles from "./App.module.css";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
