import { createComponent, useState, h, a } from "cyano";

const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  return [
    count,                      // value
    () => setCount(count + 1),  // increment
    () => setCount(count - 1)   // decrement
  ];
};

const useCounter = () => {
  // A custom hook that uses another custom hook.
  const createNewCounter = () => ({
    id: new Date().getTime(),
    initialCount: Math.round(Math.random() * 1000)
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

const _CustomHooks = () => {
  const [count, increment, decrement] = useCount(0);
  const [counters, addCounter, removeCounter] = useCounter();
  const [lastItem, ] = counters.reverse();

  return [
    h("div",
      {
        key: "TestCounter",
        "data-test-id": "TestCounter"
      },
      [
        h("h2",
          "TestCounter"
        ),
        h("p",
          [
            h("span", "count: "),
            h("span",
              { "data-test-id": "count" },
              count
            )
          ]
        ),
        h("button", 
          {
            "data-test-id": "decrement",
            disabled: count === 0,
            [a.onclick]: () => decrement()
          },
          "Less"
        ),
        h("button", 
          {
            "data-test-id": "increment",
            [a.onclick]: () => increment()
          },
          "More"
        )
      ]
    ),
    h("div", 
      {
        key: "TestCounters",
        "data-test-id": "TestCounters"
      },
      [
        h("h2",
          "TestCounters"
        ),
        h("p",
          [
            h("span", "counters: "),
            h("span", {
              "data-test-id": "counters"
            }, counters.length)
          ]
        ),
        h("button", 
          {
            "data-test-id": "decrement",
            disabled: counters.length === 0,
            [a.onclick]: () => removeCounter(lastItem)
          },
          "Remove"
        ),
        h("button", 
          {
            "data-test-id": "increment",
            [a.onclick]: () => addCounter()
          },
          "Add"
        )
      ]
    )
  ];
};

const CustomHooks = createComponent(_CustomHooks);

export default CustomHooks;
