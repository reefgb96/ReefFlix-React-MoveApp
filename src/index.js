import React from "react";
import ReactDOM from "react-dom/client";

//bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

/* axios */
import axios from "axios";

//Redux
// import { Provider } from "react-redux";
// import store from "./store/index";

//React router.
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* config axios */
axios.defaults.baseURL = "http://localhost:8181/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  /* </Provider> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
