import { cast, h, a } from "cyano";

const _Link = ({ router, name, label, path, currentPath }) => (
  h("li",
    {},  
    h("a", {
      href: path,
      className: path === currentPath ? "is-active" : "",
      [a.onclick]: e => (
        e.preventDefault(),
        router.navigate(name)
      )
    },
    label)
  )
);
const Link = cast(_Link);

const _MenuList = ({ router, title, links, currentPath }) => {
  return [
    h("p",
      {
        key: "label",
        className: "menu-label"
      },
      title
    ),
    h("ul",
      {
        key: "list",
        className: "menu-list"
      },
      links.map(link =>
        h(Link, { ...link, router, currentPath })
      )
    )
  ];
};
const MenuList = cast(_MenuList);

const _Navigation = ({ router, currentPath, parts }) => (
  h("aside",
    {
      className: "menu"
    },
    parts.map(([title, links]) =>
      h(MenuList, { router, title, links, currentPath })
    )
  )
);

export default cast(_Navigation);
