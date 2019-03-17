const Counter = ({ initialCount, useState, useCounter, renderer: h, htmlAttributes: attr }) => {
  const [count, setCount] = useState(initialCount);
  const [counters, addCounter, removeCounter] = useCounter();
  return (
    h("div",
      null,
      [
        h("div",
          {
            key: "count",
          },
          h("span",
            {
              "data-test-id": "count"
            },
            count
          )
        ),
        h("button",
          {
            disabled: count < 1,
            [attr.onclick]: () => setCount(count - 1),
            key: "counter-button",
            "data-test-id": "decrement",
          },
          "Less"
        ),
        h("button",
          {
            [attr.onclick]: () => setCount(count + 1),
            key: "counter-button",
            "data-test-id": "increment",
          },
          "More"
        ),
        h("div",
          {
            key: "counters",
            "data-test-id": "counters",
          },
          h("span", null, counters.length)
        ),
        h("button",
          {
            disabled: counters < 1,
            key: "decrement-counters-button",
            "data-test-id": "decrement-counters",
            [attr.onclick]: () => {
              const lastCounter = counters[counters.length - 1];
              removeCounter(lastCounter);
            }
          },
          "Remove counter"
        ),
        h("button",
          {
            key: "increment-counters-button",
            "data-test-id": "increment-counters",
            [attr.onclick]: () => addCounter()
          },
          "Add counter"
        ),
      ]
    )
  );
};

export { Counter };

