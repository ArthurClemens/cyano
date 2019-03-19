import React from "react";
import ReactDOM from "react-dom";
import Toggle from "./Toggle";

const App = () => (
  <Toggle />
);

const mountNode = document.querySelector("#root");
ReactDOM.render(<App />, mountNode);
