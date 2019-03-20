import React from "react";
import ReactDOM from "react-dom";
import Navigo from "navigo";
import Toggle from "./toggle";

const root = null;
const useHash = true; // Defaults to: false
const hash = "#"; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

const h = React.createElement;

const links = [
  ["Simple toggle", "/toggle", Toggle],
  // ["Custom hooks with useReducer", "/custom-hooks-usereducer", CounterController],
];

const link = (location, currentRoute, label) => 
  h("li",
    {
      key: location
    },  
    h("a", {
      href: location,
      className: location === currentRoute ? "is-active" : "",
      onClick: e => (
        e.preventDefault(),
        router.navigate(location)
      )
    },
    label)
  );


const createMenu = currentRoute => (
  h("aside",
    {
      key: "menu",
      className: "menu"
    },
    [
      h("p",
        {
          key: "label",
          className: "menu-label"
        },
        "Cyano for React Demos"
      ),
      h("ul",
        {
          key: "list",
          className: "menu-list"
        },
        links.map(([label, href]) =>
          link(href, currentRoute, label)
        )
      ),
      // tests.length
      //   ? [
      //     m("p.menu-label", "Cypress tests"),
      //     m("ul.menu-list", 
      //       tests.map(([label, href]) =>
      //         link(href, currentRoute, label)
      //       )
      //     )
      //   ]
      //   : null
    ]
  )
);

const Layout = props => (
  h("div",
    {
      className: "layout"
    },
    [
      createMenu(window.location.pathname),
      h("div",
        {
          key: "component",
          className: "component"
        },
        props.children
      )
    ]
  )
);

const mountNode = document.querySelector("#root");

const setContent = content =>
  ReactDOM.render(content, mountNode);

router
  .on({
    '/toggle': () => setContent(<Layout><Toggle /></Layout>),
    '/test':   () => setContent(<Layout><Test /></Layout>),
    '*':       () => setContent(<Layout><Toggle /></Layout>),
  })
  .resolve();
