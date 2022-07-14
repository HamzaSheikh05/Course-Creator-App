import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
