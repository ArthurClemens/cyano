import { cast, h, a, getRef, useState } from "cyano";

const _Input = props => {
  const [domElement, setDomElement] = useState();
  const [value, setValue] = useState("some input");

  return h("div",
    {
      "data-test-id": "component-input"
    },
    [
      h("input",
        {
          key: "input",
          "data-test-id": "input",
          value,
          [a.onchange]: e => setValue(e.target.value),
          [a.oninput]: e => setValue(e.target.value),
          ...getRef(dom => dom && !domElement && (
            setDomElement(dom),
            // pass back to parent
            props.ref && props.ref(dom)
          )),
        }),
      h("p",
        {
          key: "label",
          "data-test-id": "feedback",
        },
        value
      ),
      h("p",
        {
          key: "feedback",
        },
        [
          h("span",
            {
              key: "label",
            },
            "input ref: "
          ),
          h("span",
            {
              key: "domElement",
              "data-test-id": "domElement",
            },
            domElement && domElement.getAttribute("data-test-id")
          )
        ]
      ),
    ]
  );
};

const _ForwardRef = ({ Input }) => {
  const [domElement, setDomElement] = useState();

  return h("div",
    {
      "data-test-id": "component-parent"
    },
    [
      h(Input, {
        key: "parent",
        ref: dom => (
          setDomElement(dom)
        ),
      }),
      h("p",
        {
          key: "feedback",
        },
        [
          h("span",
            {
              key: "label",
            },
            "Parent ref: "
          ),
          h("span",
            {
              key: "domElement",
              "data-test-id": "domElement",
            },
            domElement && domElement.getAttribute("data-test-id")
          )
        ]
      ),
    ]
  );
};

const Input = cast(_Input);

export default cast(_ForwardRef, { Input });
