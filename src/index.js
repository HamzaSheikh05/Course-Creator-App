import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Hi() {
  return <p>Hi.</p>;
}

render(
  <Router>
    <Hi />
  </Router>,
  document.getElementById("app")
);
