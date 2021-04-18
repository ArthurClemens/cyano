import { cast, h, getRef, useRef, useState } from "cyano";

const _GetRef = () => {
  const domRef = useRef();
  const [render, forceRerender] = useState(0);

  return h("div",
    {
      "data-test-id": "DomElementRef"
    },
    [
      h("span", "Element to get a reference of: "),
      h("span", 
        {
          ...getRef(dom => {
            const shouldRerender = !domRef.current;
            domRef.current = domRef.current || dom;
            shouldRerender && forceRerender(render + 1);
          })
        },
        "QWERTY"
      ),
      h("p", [
        h("span", "DOM element textContent: "),
        h("span",
          {
            "data-test-id": "textContent"
          },
          domRef.current && domRef.current.textContent
        )
      ])
    ]
  );
};

export default cast(_GetRef);
