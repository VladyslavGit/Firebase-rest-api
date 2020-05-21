import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import styles from "./LoginPage.module.css";
import { registerUser, loginUser } from "../../redux/auth/operations";

export const RegisterPage = (props) => {
  console.log("props", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let mainerror = true;

  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = "Required email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password) {
      errors.password = "Required password";
    } else if (password.length < 6) {
      errors.password = "Must be 6 characters or more";
    }
    if (Object.keys(errors).length === 0) {
      mainerror = false;
    } else {
      mainerror = true;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      email: email,
      password: password,
      name: name,
    };
    if (mainerror === false) {
      addContact(contact, e.target.value);
    } else {
      setEmail("");
      setPassword("");
      setName("");
    }
  };

  const addContact = async (contact, value) => {
    if (value === "REGISTR_USER") {
      dispatch(registerUser(contact));
    } else if (value === "LOGIN_USER") {
      dispatch(loginUser(contact));
    }

    await setEmail("");
    await setPassword("");
  };

  const handleChange = async (e) => {
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <h2 className={styles.authText}>
            Ви можете авторизуватися за допомогою e-mail та паролю, попередньо
            зареєструвавшись
          </h2>
          <h2 className={styles.authTextInput}>Username</h2>
          <input
            className={styles.input}
            type="text"
            name="name"
            required
            placeholder={
              formik.errors.email ? formik.errors.email : "Enter your Name"
            }
            onChange={handleChange}
            value={name}
          />
          <h2 className={styles.authTextInput}>Email</h2>
          <input
            className={styles.input}
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
            placeholder={
              formik.errors.email ? formik.errors.email : "Enter Email"
            }
            onChange={handleChange}
            value={email}
          />
          <h2 className={styles.authTextInput}>Password</h2>
          <input
            className={styles.input}
            type="password"
            name="password"
            required
            placeholder={
              formik.errors.password ? formik.errors.password : "Enter password"
            }
            onChange={handleChange}
            value={password}
          />
          <div className={styles.divFlex}>
            <div className={styles.divbtn}>
              <button
                className={styles.btn}
                type="button"
                value="LOGIN_USER"
                onClick={(e) => {
                  formik.handleSubmit();
                  handleSubmit(e);
                }}
              >
                Увійти
              </button>
            </div>
            <div className={styles.divbtn}>
              <button
                className={styles.btn}
                type="button"
                value="REGISTR_USER"
                onClick={(e) => {
                  formik.handleSubmit();
                  handleSubmit(e);
                }}
              >
                Зареєструватися
              </button>
            </div>
            <Link to="/authentication/login">go to login</Link>
          </div>
        </form>
        <div className={styles.plogo}>
          <a
            href="https://github.com/VladyslavGit/firebase-rest-api"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkLogo}
          >
            Schedule App
          </a>
          <img
            className={styles.logoimg}
            src={require("../../assets/images/logo.png")}
            alt="logo"
          />
        </div>
      </div>
      <img
        className={styles.mobimg}
        src={require("../../assets/images/poster.jpg")}
        alt="maintimg"
      />
    </div>
  );
};
