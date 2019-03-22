const _Link = ({ router, name, label, path, currentPath, h, a }) => (
  h("li",
    {
      key: path
    },  
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

const _MenuList = ({ router, title, links, currentPath, h, Link }) => {
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

const _Navigation = ({ router, currentPath, parts, h, MenuList }) => (
  h("aside",
    {
      key: "menu",
      className: "menu"
    },
    parts.map(([title, links]) =>
      h(MenuList, { router, title, links, currentPath })
    )
  )
);

export const createNavigation = createComponent => {
  const Link = createComponent(_Link);
  const MenuList = createComponent(_MenuList, { Link });
  const Navigation = createComponent(_Navigation, { MenuList });
  return Navigation;
};
