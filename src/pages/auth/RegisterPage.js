import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = (props) => {
  console.log("props RegisterPage", props);
  return (
    <div>
      <form>
        <input placeholder="enter your login" />
        <input placeholder="enter your email" />
        <input placeholder="enter your password" />
      </form>
      <Link to="/authentication/login">go to login</Link>
    </div>
  );
};
