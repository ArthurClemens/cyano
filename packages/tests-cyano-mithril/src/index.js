import m from "mithril";
import { cast } from "cyano";
import { createApp } from "tests-cyano-shared/app/createApp";

const mountNode = document.querySelector("#root");

import { addLayoutStyles, addTypography } from "polythene-css";
addTypography();
addLayoutStyles();
import Polythene from "tests-cyano-shared/polythene";

const setContent = ({ AppLayout, ...props }) => {
  m.mount(mountNode, {
    view: () =>
      m(Polythene)
      // m(AppLayout, props)
  });
};

createApp({
  setContent,
  cast,
});
