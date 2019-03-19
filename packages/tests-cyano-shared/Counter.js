const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unhandled action:", action);
  }
};

const Counter = ({ id, initialCount, removeCounter, useEffect, useState, useRef, useReducer, h, a }) => {
  const [countState, dispatch] = useReducer(counterReducer, { count: initialCount });
  const count = countState.count;

  const [inited, setInited] = useState(false);
  const dom = useRef();
  const domCountElement = useRef();

  const remove = () => {
    const removeOnTransitionEnd = () => (
      removeCounter(id),
      dom.current.removeEventListener("transitionend", removeOnTransitionEnd)
    );
    dom.current.addEventListener("transitionend", removeOnTransitionEnd);
    dom.current.classList.remove("active");
  };

  useEffect(() => {
    setInited(true);
  }, [/* empty array: only run at mount */]);

  return (
    h(".counter",
      {
        className: inited ? "active" : "",
        oncreate: vnode => dom.current = vnode.dom,
      },
      h(".counter-inner", [
        h(".count", {
          oncreate: vnode => domCountElement.current = vnode.dom
        }, count),
        h("button",
          {
            className: "button",
            disabled: count === 0,
            [a.onclick]: () => dispatch({ type: "decrement" })
          },
          h("span.icon.is-small",
            h("i.fas.fa-minus")
          )
        ),
        h("button",
          {
            className: "button",
            [a.onclick]: () => dispatch({ type: "increment" })
          },
          h("span.icon.is-small",
            h("i.fas.fa-plus")
          )
        ),
        h(".spacer"),
        h("button", {
          className: "delete is-large",
          [a.onclick]: () => remove()
        }, "Remove me"),
      ])
    )
  );
};

export default Counter;
