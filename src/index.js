import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";

function changeCategory(category) {
  // parameter and value need to be the same here for this simple function.
  // otherwise, fnc doesn't work without use of category value
  currentCategory = category;
  render();
};

function render() {

  ReactDOM.render(
    <App
    state={state}
    products={state.products}
    currentCategory={currentCategory}
    changeCategory={changeCategory}
     />,
    document.getElementById("root")
  );
}
render();
