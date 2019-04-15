import ReactDOM from "react-dom";
import { cast, h } from "cyano";
import { createApp } from "tests-cyano-shared/app/createApp";

const mountNode = document.querySelector("#root");

import { addLayoutStyles, addTypography } from "polythene-css";
addTypography();
addLayoutStyles();
import Polythene from "tests-cyano-shared/polythene";
import Ripple from "polythene-react-ripple";

const setContent = ({ AppLayout, ...props }) => {
  ReactDOM.render(
    h("div", [
      h(Polythene),
      h("div",
        {
          style: {
            position: "relative",
            background: "#eee",
            width: "100px",
            height: "100px",
          }
        },
        h(Ripple)
      )
    ]),
    // h(AppLayout, props),
    mountNode
  );
};

createApp({
  setContent,
  cast,
});
