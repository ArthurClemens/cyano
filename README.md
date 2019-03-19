# Cyano

Takes a base component and returns a Mithril or React component. This is useful if you want to support both libraries with a minimum of duplicate code.


## Usage

### With Mithril

```bash
npm install cyano-mithril
```

Use in code:

```javascript
import { createComponent } from "cyano-mithril"
```

### With React

```bash
npm install cyano-react
```

Use in code:

```javascript
import { createComponent } from "cyano-react"
```


## createComponent

Create a Mithril component from a base component:

```javascript
import m from "mithril"
import { createComponent } from "cyano-mithril"
import { SharedCounter } from "./shared/components"

const Counter = createComponent(SharedCounter)

// Use:
m(Counter, { initialCount: 1 })
```

Similarly create a React component from the same base component:

```jsx
import React from "react"
import { createComponent } from "cyano-react"
import { SharedCounter } from "./shared/components"

const Counter = createComponent(SharedCounter)

// Use:
<Counter initialCount={1} />
```


## Base component

The base component receives:
* Component props
* Default hooks
* Custom hooks
* Render function
  * For Mithril: `m`
  * For React: [react-hyperscript](https://github.com/mlmorg/react-hyperscript)
* Accepted HTML attributes

```javascript
const SharedCounter = ({
  initialCount,    // Component prop
  useState,        // Default hook
  useCounter,      // Custom hook
  h,               // Render function
  a,               // Object with accepted HTML attributes  
}) => {
  // ...
}
```

### Hyperscript

To support both Mithril and React, components are written using hyperscript. This is common for Mithril, but less used for React.

[React Without JSX](https://reactjs.org/docs/react-without-jsx.html) demonstrates how to use `React.createElement` to write component code. Cyano uses an enhanced version through [react-hyperscript](https://github.com/mlmorg/react-hyperscript).

### Lifecycle methods using hooks

The base components are render functions. Instead of lifecycle methods you use hooks. 

* React Hooks have been introduced in React 16.8.
* For Mithril see we use helper library [mithril-hookup](https://github.com/ArthurClemens/mithril-hookup).

### HTML attributes 

React follows the camelCase convention for accepted HTML attributes, whereas Mithril uses lowercase names.

Possible names are passed in `a`. Instead of `onClick` you write `[a.onclick]`:

### Example

```javascript
const SharedCounter = ({ initialCount, h, a }) => {
  return (
    h("div", 
      [
        h(".count",
          { key: "count" }, // required for React when in an array
          initialCount
        ),
        h("button",
          {
            key: "increment", // required for React when in an array
            [a.onclick]: () => console.log("clicked")
          },
          "More"
        ),
      ]
    )
  )
}
```


## Using hooks

Base components have access to default hooks (see "supported hooks" below) and custom hooks.

```javascript
const SharedCounter = ({ initialCount, h, a, useState, useEffect }) => {
  const [count, setCount] = useState(initialCount)

  useEffect(
    () => {
      // ...
    },
    [count] // Only re-run when value has changed
  )

  return (
    h("div",
      [
        h(".count",
          { key: "count" },
          count
        ),
        h("button",
          {
            key: "increment",
            [a.onclick]: () => setCount(count + 1),
          },
          "More"
        ),
      ]
    )
  )
}
```


## Custom hooks

Custom hooks are passed as second parameter to `createComponent`:

```javascript
const Counter = createComponent(SharedCounter, customHooks)
```

Custom hooks are created with a factory function. The function receives the default hooks (automatically), and should return an object with custom hook functions:

```javascript
const customHooks = ({ useState /* or other default hooks required here */ }) => ({
  useCount: (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)
    return [
      count,                      // value
      () => setCount(count + 1),  // increment
      () => setCount(count - 1)   // decrement
    ]
  }
})
```

To use the custom hooks:

```javascript
const SharedCounter = ({ initialCount, h, a, useCount }) => {
  const [count, increment, decrement] = useCount(initialCount)
  // ...
}
```

See [mithril-hookup](https://github.com/ArthurClemens/mithril-hookup) for more examples.


## Supported hooks

* `useState`
* `useEffect`
* `useLayoutEffect`
* `useReducer`
* `useRef`
* `useMemo`
* `useCallback`
* Custom hooks


## Compatibility

* Mithril: tested with Mithril 1.1.6 and Mithril 2.x
* React: tested with React 16.8.4


## React and Webpack

It may be necessary to point Webpack to the React module. Add a `resolve` entry to the config:

```javascript
resolve: {
  alias: {
    "react": path.resolve(baseDir, "node_modules/react"),
  },
},
```


## Size

* `cyano-mithril.js`:
  * 1.7 Kb gzipped
  * Includes: [mithril-hookup](https://github.com/ArthurClemens/mithril-hookup)
* `cyano-react.js`:
  * 1.3 Kb gzipped
  * Includes: [react-hyperscript](https://github.com/mlmorg/react-hyperscript)


## Supported browsers

Output from `npx browserslist`:

```
and_chr 71
and_ff 64
and_qq 1.2
and_uc 11.8
android 67
baidu 7.12
chrome 72
chrome 71
edge 18
edge 17
firefox 65
firefox 64
ie 11
ie_mob 11
ios_saf 12.0-12.1
ios_saf 11.3-11.4
op_mini all
op_mob 46
opera 57
safari 12
samsung 8.2
```


## License

MIT
