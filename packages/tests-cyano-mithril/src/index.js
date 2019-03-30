import m from "mithril";
import { cast } from "cyano";
import { createApp } from "tests-cyano-shared/app/createApp";

const mountNode = document.querySelector("#root");

import { addLayoutStyles, addTypography } from "polythene-css";
addTypography();
addLayoutStyles();
import Button from "tests-cyano-shared/polythene/button";

const setContent = ({ AppLayout, ...props }) => {
  m.mount(mountNode, {
    view: () =>
      m(Button, { 
        label: "Mithril button"
      })
      // m(AppLayout, props)
  });
};

createApp({
  setContent,
  cast,
});
