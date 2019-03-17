const Counter = ({ initialCount, useState, useCounter, renderer: h, htmlAttributes: attr }) => {
  const [count, setCount] = useState(initialCount);
  const [counters, addCounter, removeCounter] = useCounter();
  return (
    h("div",
      [
        h(".count",
          {
            key: "count"
          },
          h("span", count)
        ),
        h("button",
          {
            [attr.onclick]: () => setCount(count + 1),
            key: "counter-button",
          },
          "More"
        ),
        h(".counters",
          { key: "counters" },
          h("span", counters.length)
        ),
        h("button",
          {
            key: "counters-remove-button",
            [attr.onclick]: () => removeCounter()
          },
          "Remove counter"
        ),
        h("button",
          {
            key: "counters-add-button",
            [attr.onclick]: () => addCounter()
          },
          "Add counter"
        ),
      ]
    )
  );
};

module.exports = { Counter };
