import { cast, useState, useEffect, useRef, useReducer, h, a, getRef } from "cyano";

const useCounter = () => {
  // A custom hook that uses another custom hook.
  const createNewCounter = () => ({
    id: new Date().getTime(),
    initialCount: Math.round(Math.random() * 10)
  });
  const firstCounter = createNewCounter();
  const [counters, addCounter, removeCounter] = useArray([firstCounter]);
  return [
    counters,
    () => addCounter(createNewCounter()),
    remove => removeCounter(remove)
  ];
};

const useArray = (initialValue = []) => {
  const [arr, setArr] = useState(initialValue)
  return [
    arr,
    add => setArr(arr.concat(add)),
    remove => setArr(arr.filter(item => item !== remove))
  ];
};

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

const _Counter = ({ id, initialCount, removeCounter }) => {
  const [countState, dispatch] = useReducer(counterReducer, { count: initialCount });
  const count = countState.count;

  const [inited, setInited] = useState(false);
  const domRef = useRef();

  const remove = () => {
    const removeOnTransitionEnd = () => (
      removeCounter(id),
      domRef.current.removeEventListener("transitionend", removeOnTransitionEnd)
    );
    domRef.current.addEventListener("transitionend", removeOnTransitionEnd);
    domRef.current.classList.remove("active");
  };

  useEffect(() => {
    setInited(true);
  }, [/* empty array: only run at mount */]);

  return (
    h("div",
      {
        className: `counter ${inited ? "active" : ""}`,
        ...getRef(dom => domRef.current = domRef.current || dom)
      },
      h("div",
        {
          className: "counter-inner"
        },
        [
          h("div",
            {
              className: "count",
            },
            count
          ),
          h("button",
            {
              className: "button",
              disabled: count === 0,
              [a.onclick]: () => dispatch({ type: "decrement" })
            },
            h("span",
              {
                className: "icon is-small"
              },
              h("i",
                {
                  className: "fas fa-minus"
                }
              )
            )
          ),
          h("button",
            {
              className: "button",
              [a.onclick]: () => dispatch({ type: "increment" })
            },
            h("span",
              {
                className: "icon is-small"
              },
              h("i",
                {
                  className: "fas fa-plus"
                }
              )
            )
          ),
          h("div", {
            className: "spacer",
          }),
          h("button", {
            className: "delete is-large",
            [a.onclick]: () => remove()
          }, "Remove me"),
        ]
      )
    )
  );
};

const _CounterController = ({ Counter }) => {
  const [counters, addCounter, removeCounter] = useCounter();
  return [
    h("div",
      {
        className: "controls",
        key: "controls"
      },
      [
        h("button",
          {
            className: "button is-info",
            [a.onclick]: () => addCounter()
          },
          "Add counter"
        ),
        h("div",
          {
            className: "spacer",
          }
        ),
        h("span",
          {
            className: "info",
          },
          h("span",
            {
              className: "tag is-light is-medium"
            },
            `Counters: ${counters.length}`
          )
        )
      ]
    ),
    h.fragment(
      { key: "counters" },
      counters.map(c => (
        h(Counter, {
          key: c.id,
          id: c.id,
          initialCount: c.initialCount,
          removeCounter: () => removeCounter(c),
        })
      ))
    )
  ];
};

const Counter = cast(_Counter);
const CounterController = cast(_CounterController, { Counter });

export default CounterController;
