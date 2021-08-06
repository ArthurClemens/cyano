import { a, cast, h, useState } from 'cyano';

const useArray = <T>(
  initialValue: T[] = [],
): [arr: T[], add: (item: T) => void, remove: (item: T) => void] => {
  const [arr, setArr] = useState<T[]>(initialValue);
  return [
    arr,
    add => setArr(arr.concat(add)),
    remove => setArr(arr.filter(item => item !== remove)),
  ];
};

const useCount = (
  initialValue: number = 0,
): [count: number, increment: () => void, decrement: () => void] => {
  const [count, setCount] = useState(initialValue);
  return [
    count, // value
    () => setCount(count + 1), // increment
    () => setCount(count - 1), // decrement
  ];
};

type CounterData = {
  id: number;
  initialCount: number;
};

const useCounter = (): [
  arr: CounterData[],
  add: () => void,
  remove: (item: CounterData) => void,
] => {
  // A custom hook that uses another custom hook.
  const createNewCounter = () =>
    ({
      id: new Date().getTime(),
      initialCount: Math.round(Math.random() * 10),
    } as CounterData);
  const firstCounter = createNewCounter();
  const [counters, addCounter, removeCounter] = useArray<CounterData>([
    firstCounter,
  ]);
  return [
    counters,
    () => addCounter(createNewCounter()),
    remove => removeCounter(remove),
  ];
};

const _CustomHooks = () => {
  const [count, increment, decrement] = useCount(0);
  const [counters, addCounter, removeCounter] = useCounter();
  const [lastItem] = counters.reverse();

  return h.fragment({}, [
    h(
      'div',
      {
        key: 'TestCounter',
        'data-test-id': 'TestCounter',
      },
      [
        h('h2', 'TestCounter'),
        h('p', [
          h('span', 'count: '),
          h('span', { 'data-test-id': 'count' }, count),
        ]),
        h(
          'button',
          {
            'data-test-id': 'decrement',
            disabled: count === 0,
            [a.onclick]: () => decrement(),
          },
          'Less',
        ),
        h(
          'button',
          {
            'data-test-id': 'increment',
            [a.onclick]: () => increment(),
          },
          'More',
        ),
      ],
    ),
    h(
      'div',
      {
        key: 'TestCounters',
        'data-test-id': 'TestCounters',
      },
      [
        h('h2', 'TestCounters'),
        h('p', [
          h('span', 'counters: '),
          h(
            'span',
            {
              'data-test-id': 'counters',
            },
            counters.length,
          ),
        ]),
        h(
          'button',
          {
            'data-test-id': 'decrement',
            disabled: counters.length === 0,
            [a.onclick]: () => removeCounter(lastItem),
          },
          'Remove',
        ),
        h(
          'button',
          {
            'data-test-id': 'increment',
            [a.onclick]: () => addCounter(),
          },
          'Add',
        ),
      ],
    ),
  ]);
};

const CustomHooks = cast(_CustomHooks);

export default CustomHooks;
