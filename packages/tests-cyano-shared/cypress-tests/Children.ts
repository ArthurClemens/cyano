import { cast, h } from "cyano";

const _Children = ({ title, children }) => {
  return h("div",
    {
      "data-test-id": "Children"
    },
    [
      h("h2", title),
      children
    ]
  );
};

const _Wrapper = ({ title, Children }) => 
  h("div",
    null,
    h(Children,
      { title },
      h("div", null, "This is a child")
    )
  );

const Children = cast(_Children);
const Wrapper = cast(_Wrapper, { title: "Children", Children });

export default Wrapper;
