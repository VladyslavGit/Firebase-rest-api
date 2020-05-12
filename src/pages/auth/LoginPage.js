import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = (props) => {
  console.log("props LoginPage", props);
  return (
    <div>
      <form>
        <input placeholder="enter your email" />
        <input placeholder="enter your password" />
      </form>
      <Link to="/authentication/register">go to register</Link>
    </div>
  );
};
