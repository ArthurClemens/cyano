
export const hooks = ({ useState }) => {
  // Use a name to access it from hook functions
  const hooks = {
    useCount: (initialValue = 0) => {
      const [count, setCount] = useState(initialValue);
      return [
        count,                      // value
        () => setCount(count + 1),  // increment
        () => setCount(count - 1)   // decrement
      ];
    },
    useCounter: () => {
      // A custom hook that uses another custom hook.
      const createNewCounter = () => ({
        id: new Date().getTime(),
        initialCount: Math.round(Math.random() * 1000)
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
      ];
    },
  };
  return hooks;
};

export const CustomHooks = ({ useCount, useCounter, h, a }) => {
  const [count, increment, decrement] = useCount(0);
  const [counters, addCounter, removeCounter] = useCounter();
  const [lastItem, ] = counters.reverse();

  return [
    h("[data-test-id=TestCounter]", [
      h("h2", "TestCounter"),
      h("p", [
        h("span", "count: "),
        h("span[data-test-id=count]", count)
      ]),
      h("button[data-test-id=decrement]", 
        {
          disabled: count === 0,
          [a.onclick]: () => decrement()
        },
        "Less"
      ),
      h("button[data-test-id=increment]", 
        {
          [a.onclick]: () => increment()
        },
        "More"
      )
    ]),
    h("[data-test-id=TestCounters]", [
      h("h2", "TestCounters"),
      h("p", [
        h("span", "counters: "),
        h("span[data-test-id=counters]", counters.length)
      ]),
      h("button[data-test-id=decrement]", 
        {
          disabled: counters.length === 0,
          [a.onclick]: () => removeCounter(lastItem)
        },
        "Remove"
      ),
      h("button[data-test-id=increment]", 
        {
          [a.onclick]: () => addCounter()
        },
        "Add"
      )
    ])
  ];
};
