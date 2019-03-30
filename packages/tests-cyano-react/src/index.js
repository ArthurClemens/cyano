import ReactDOM from "react-dom";
import { createComponent, h } from "cyano";
import { createApp } from "tests-cyano-shared/app/createApp";

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
