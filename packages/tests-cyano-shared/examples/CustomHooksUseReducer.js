const customHooks = ({ useState }) => {
  // Use a name to access it from hook functions
  const hooks = {
    useCounter: () => {
      // A custom hook that uses another custom hook.
      const createNewCounter = () => ({
        id: new Date().getTime(),
        initialCount: Math.round(Math.random() * 10)
      });
      const firstCounter = createNewCounter();
      const [counters, addCounter, removeCounter] = hooks.useArray([firstCounter]);
      return [
        counters,
        () => addCounter(createNewCounter()),
        remove => removeCounter(remove)
      ];
    },
    useArray: (initialValue = []) => {
      const [arr, setArr] = useState(initialValue)
      return [
        arr,
        add => setArr(arr.concat(add)),
        remove => setArr(arr.filter(item => item !== remove))
      ]
    },
  };
  return hooks;
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

export const _Counter = ({ id, initialCount, removeCounter, useEffect, useState, useRef, useReducer, h, a, getDom }) => {
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
    h(".counter",
      {
        className: inited ? "active" : "",
        ...getDom(dom => domRef.current = domRef.current || dom)
      },
      h(".counter-inner",
        null,
        [
          h(".count",
            {
              key: "count",
            },
            count
          ),
          h("button",
            {
              key: "button-decrement",
              className: "button",
              disabled: count === 0,
              [a.onclick]: () => dispatch({ type: "decrement" })
            },
            h("span.icon.is-small", null,
              h("i.fas.fa-minus")
            )
          ),
          h("button",
            {
              key: "button-increment",
              className: "button",
              [a.onclick]: () => dispatch({ type: "increment" })
            },
            h("span.icon.is-small", null,
              h("i.fas.fa-plus")
            )
          ),
          h(".spacer", {
            key: "spacer"
          }),
          h("button", {
            key: "button-remove",
            className: "delete is-large",
            [a.onclick]: () => remove()
          }, "Remove me"),
        ]
      )
    )
  );
};

const _CounterController = ({ useCounter, h, a, Counter }) => {
  const [counters, addCounter, removeCounter] = useCounter();
  return [
    h(".controls",
      {
        key: "controls"
      },
      [
        h("button",
          {
            key: "button",
            className: "button is-info",
            [a.onclick]: () => addCounter()
          },
          "Add counter"
        ),
        h(".spacer",
          {
            key: "spacer"
          }
        ),
        h("span.info",
          {
            key: "info"
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
    counters.map(c => (
      h(Counter, {
        key: c.id,
        id: c.id,
        initialCount: c.initialCount,
        removeCounter: () => removeCounter(c),
      })
    ))
  ];
};

export const createCounter = createComponent => {
  const Counter = createComponent(_Counter, customHooks);
  const CounterController = createComponent(_CounterController, customHooks, { Counter });
  return CounterController;
};
