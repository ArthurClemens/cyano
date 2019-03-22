import React from "react";
import ReactDOM from "react-dom";
import { createComponent } from "cyano-react";
import { createApp } from "tests-cyano-shared/app/createApp";

const h = React.createElement;
const mountNode = document.querySelector("#root");

const setContent = ({ AppLayout, ...props }) => {
  ReactDOM.render(
    h(AppLayout, props),
    mountNode
  );
};

createApp({
  setContent,
  createComponent,
});
