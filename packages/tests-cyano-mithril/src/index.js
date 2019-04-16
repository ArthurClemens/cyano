import m from "mithril";
import { cast } from "cyano";
import { createApp } from "tests-cyano-shared/app/createApp";

const mountNode = document.querySelector("#root");

const setContent = ({ AppLayout, ...props }) => {
  m.mount(mountNode, {
    view: () =>
      m(AppLayout, props)
  });
};

createApp({
  setContent,
  cast,
});
