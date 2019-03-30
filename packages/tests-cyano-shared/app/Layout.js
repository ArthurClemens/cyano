import { cast, h } from "cyano";

const _Layout = ({ navigation, children }) => (
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

const Layout = cast(_Layout);

export default Layout;
