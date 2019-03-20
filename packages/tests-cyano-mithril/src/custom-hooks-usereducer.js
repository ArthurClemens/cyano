import { createComponent } from "cyano-mithril";
import Counter from "tests-cyano-shared/Counter";
import customHooks from "tests-cyano-shared/customHooks";

const CounterController = ({ useCounter, h, a, Counter }) => {
  const [counters, addCounter, removeCounter] = useCounter();
  return [
    h(".controls", [
      h("button",
        {
          className: "button is-info",
          [a.onclick]: () => addCounter()
        },
        "Add counter"
      ),
      h(".spacer"),
      h("span.info",
        h("span",
          {
            className: "tag is-light is-medium"
          },
          `Counters: ${counters.length}`
        )
      )
    ]),
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

export default createComponent(CounterController, customHooks, {
  Counter: createComponent(Counter, customHooks)
});

