import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
  root
);

reportWebVitals();
