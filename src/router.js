import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import { FeaturesPage } from "./pages/FeaturesPage";

export const useRouter = (authentication) => {
  console.log("authentication-----", authentication);
  if (authentication) {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/features" component={FeaturesPage} />
        <Redirect exact to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/authentication" component={AuthPage} />
      <Redirect to="/authentication" />
    </Switch>
  );
};
