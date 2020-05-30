import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { userSlice } from "../redux/reducers/userReducer";
import { useRouter } from "../router";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import styles from "./App.module.css";

function App(props) {
  const [isAuth, setisAuth] = useState(null);
  useEffect(() => {
    onAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      dispatch(userSlice.actions.getUser({ name: currentUser.displayName }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const onAuth = () => {
    auth.onAuthStateChanged((user) => {
      setisAuth(user);
    });
  };

  const dispatch = useDispatch();

  const routing = useRouter(isAuth);
  return (
    <>
      {isAuth && <Header />}
      <div className={styles.wrapper}>{routing}</div>
      {isAuth && <Footer />}
    </>
  );
}

export default App;
