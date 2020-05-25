import React from "react";
import styles from "./App.module.css";
import { useRouter } from "../router";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

const token = "r";

function App() {
  const routing = useRouter(token);
  return (
    <>
      {token && <Header />}
      <div className={styles.wrapper}>{routing}</div>
      {token && <Footer />}
    </>
  );
}

export default App;
