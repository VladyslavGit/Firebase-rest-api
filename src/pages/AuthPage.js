import React, { Component } from "react";
import { Route } from "react-router-dom";
import { LoginPage } from "./auth/LoginPage";
import { RegisterPage } from "./auth/RegisterPage";

class AuthPage extends Component {
  state = {};

  componentDidMount() {
    this.props.history.push(`${this.props.match.path}/login`);
  }
  render() {
    return (
      <>
        <Route
          exact
          path={`${this.props.match.path}/register`}
          component={RegisterPage}
        />
        <Route
          exact
          path={`${this.props.match.path}/login`}
          component={LoginPage}
        />
      </>
    );
  }
}

export default AuthPage;
