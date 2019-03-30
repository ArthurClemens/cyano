import ReactDOM from "react-dom";
import { cast, h } from "cyano";
import { createApp } from "tests-cyano-shared/app/createApp";

const mountNode = document.querySelector("#root");

import { addLayoutStyles, addTypography } from "polythene-css";
addTypography();
addLayoutStyles();
import Button from "tests-cyano-shared/polythene/button";

const setContent = ({ AppLayout, ...props }) => {
  ReactDOM.render(
    h(Button, { 
      label: "React button"
    }),
    // h(AppLayout, props),
    mountNode
  );
};

createApp({
  setContent,
  cast,
});
