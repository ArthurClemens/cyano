
const _Layout = ({ h, navigation, children }) => (
  h("div",
    {
      className: "layout"
    },
    [
      navigation,
      h("div",
        {
          key: "component",
          className: "component"
        },
        children
      )
    ]
  )
);

export const createLayout = createComponent => {
  const Layout = createComponent(_Layout);
  return Layout;
};
