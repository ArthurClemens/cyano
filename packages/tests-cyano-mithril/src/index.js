import m from "mithril";
import CounterController from "./custom-hooks-usereducer";
import Toggle from "./toggle";

const links = [
  ["Simple toggle", "/toggle", Toggle],
  ["Custom hooks with useReducer", "/custom-hooks-usereducer", CounterController],
];

const tests = [];

const link = (href, currentRoute, label) => 
  m("li",
    m("a", {
      href,
      oncreate: m.route.link,
      className: href === currentRoute ? "is-active" : ""
    },
    label)
  );

const createMenu = currentRoute => (
  m("aside.menu", [
    m("p.menu-label", "Cyano for Mithril Demos"),
    m("ul.menu-list", 
      links.map(([label, href]) =>
        link(href, currentRoute, label)
      )
    ),
    tests.length
      ? (
        m("p.menu-label", "Cypress tests"),
        m("ul.menu-list", 
          tests.map(([label, href]) =>
            link(href, currentRoute, label)
          )
        )
      )
      : null
  ])
);

const Layout = {
  view: vnode =>
    m(".layout", [
      createMenu(m.route.get()),
      m(".component", vnode.children)
    ])
};

const root = document.getElementById("root");
const allLinks = links.concat(tests);

const routes = allLinks.reduce((acc, [, href, Component]) => (
  acc[href] = {
    render: () =>
      m(Layout, { href }, m(Component))
  },
  acc
), {});

const [,firstRoute,] = allLinks[0];
m.route(root, firstRoute, routes);
