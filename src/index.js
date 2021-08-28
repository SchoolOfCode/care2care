import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";

const root = document.getElementById("root");

ReactDOM.render(
  <Auth0Provider
    domain='archianne.eu.auth0.com'
    clientId='9ciI61OkjK0UPi8c8TG0EGUjX6tQHPjq'
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  root
);

reportWebVitals();
