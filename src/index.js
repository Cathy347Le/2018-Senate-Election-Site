import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import articles from "./senateArticles.json";
import races from "./senateResultsShort.json";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <App articles={articles} races={races} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
