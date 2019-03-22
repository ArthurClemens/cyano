# Cyano

Takes a base component and returns a Mithril or React component. This is useful if you want to support both libraries with a minimum of duplicate code.


- [Usage](#usage)
  - [Install and import](#install-and-import)
    - [With Mithril](#with-mithril)
    - [With React](#with-react)
  - [createComponent](#createcomponent)
    - [With Mithril](#with-mithril-1)
    - [With React](#with-react-1)
    - [Signature](#signature)
  - [Hyperscript](#hyperscript)
  - [Lifecycle methods using hooks](#lifecycle-methods-using-hooks)
  - [HTML attributes](#html-attributes)
  - [Getting DOM elements](#getting-dom-elements)
    - [Under the hood](#under-the-hood)
  - [Using hooks](#using-hooks)
  - [Custom hooks](#custom-hooks)
  - [Supported hooks](#supported-hooks)
  - [Passing or nesting components](#passing-or-nesting-components)
- [Compatibility](#compatibility)
- [React and Webpack](#react-and-webpack)
- [Size](#size)
- [Supported browsers](#supported-browsers)
- [License](#license)


## Usage

### Install and import 

#### With Mithril

```bash
npm install cyano-mithril
```

Use in code:

```javascript
import { createComponent } from "cyano-mithril"
```

#### With React

```bash
npm install cyano-react
```

Use in code:

```javascript
import { createComponent } from "cyano-react"
```


### createComponent

Takes a base component and returns a Mithril or React component.

#### With Mithril

Create a Mithril component from a base component:

```javascript
import m from "mithril"
import { createComponent } from "cyano-mithril"
import { SharedCounter } from "./shared/components"

const Counter = createComponent(SharedCounter)

// Use:
m(Counter, { initialCount: 1 })
```

#### With React

Similarly create a React component from the same base component:

```jsx
import React from "react"
import { createComponent } from "cyano-react"
import { SharedCounter } from "./shared/components"

const Counter = createComponent(SharedCounter)

// Use:
<Counter initialCount={1} />
```


#### Signature

`createComponent(baseComponent, customHooksFn, props)`

| **Argument**    | **Type**  | **Required** | **Description** |
| --- | --- | --- | --- | 
| `baseComponent` | Function component | Yes | The base/common/shared component to be converted for Mithril or React |
| `customHooksFn` | Function or undefined | No | See [Custom hooks](#custom-hooks) |
| `props`         | Object | No | Any variable to pass to `baseComponent`; see also [Passing or nesting components](#passing-or-nesting-components) | 


The base component accepts an options object and returns a view:

`baseComponent(options) => any`

Options contains these arguments:

| **Argument** | **Type**  | **Available by default** | **Description** |
| --- | --- | --- | --- | 
| `h`          | Function  | Yes | Render function: for Mithril `m`; for React [react-hyperscript](https://github.com/mlmorg/react-hyperscript) |
| `a`          | Object    | Yes | Map of accepted HTML abbritutes; see [HTML attributes](#html-attributes) |
| `getDom`    | Function | Yes | Function to return a DOM element; see [Getting DOM elements](#getting-dom-elements) |
| `useState` | Function | Yes | Default hook |
| `useEffect` | Function | Yes | Default hook |
| `useLayoutEffect` | Function | Yes | Default hook |
| `useReducer` | Function | Yes | Default hook |
| `useRef` | Function | Yes | Default hook |
| `useMemo` | Function | Yes | Default hook |
| `useCallback` | Function | Yes | Default hook |
| prop1, ...        | any       | No | Properties passed to the component |
| hookFunction1, ... | Function  | No | Custom hook functions |


### Hyperscript

To support both Mithril and React, components are written using hyperscript. This is common for Mithril, but less used for React.

[React Without JSX](https://reactjs.org/docs/react-without-jsx.html) demonstrates how to use `React.createElement` to write component code. Cyano uses an enhanced version through [react-hyperscript](https://github.com/mlmorg/react-hyperscript).

### Lifecycle methods using hooks

The base components are render functions. Instead of lifecycle methods you use hooks. 

* React Hooks have been introduced in React 16.8.
* For Mithril see we use helper library [mithril-hookup](https://github.com/ArthurClemens/mithril-hookup).

### HTML attributes 

React follows the camelCase convention for accepted HTML attributes, whereas Mithril uses lowercase names.

Argument `a` will map the lowercase attribute name to an accepted one. Instead of `onClick` (for React) or (`onclick` (for Mithril) you write `[a.onclick]`:

```javascript
const SharedCounter = ({ initialCount, h, a }) => {
  return (
    h("div", {},
      [
        h(".count",
          {
            key: "count", // required for React when in an array
          },
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

### Getting DOM elements

Cyano provides callback function `getDom` to get a reference to the DOM element.

`getDom` accepts a function that receives the DOM reference.

DOM reference are commonly stored in a `useRef` object. Note that updating `useRef` will not cause a re-render.

```javascript
const SharedComponent = ({ useRef, h, a, getDom }) => {
  const domRef = useRef();
  
  return (
    h("div", 
      {
        className: "component",
        ...getDom(dom => domRef.current = domRef.current || dom) // React will call this each render
      },
      "My component"
    )
  )
}
```

The example above contains a check to prevent superfluous updates to the variable `domRef`.

#### Under the hood

* `cyano-mithril`: `getDom` uses Mithril's lifecycle method `oncreate` to access the DOM element. This method will be called once.
* `cyano-react`: `getDom` uses React's `ref` method to access the DOM element. This method will be called on each render. When the element is removed from the DOM, `getDom` will receive `null`. Using an update check as shown above will prevent that the reference will be lost.


### Using hooks

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


### Custom hooks

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


### Supported hooks

* `useState`
* `useEffect`
* `useLayoutEffect`
* `useReducer`
* `useRef`
* `useMemo`
* `useCallback`
* Custom hooks


### Passing or nesting components

Components used in another component need to be converted beforehand.

Converted components are passed using the 3rd argument to `createComponent`:

```javascript
// src/shared/Navigation.js

const _Link = ({ label, path, h, a }) => (  
  h("a",
    {
      href: path,
      [a.onclick]: e => (
        e.preventDefault(),
        // do something
      )
    },
    label
  )
)

const _Navigation = ({ h, Link }) => [
  h(Link, { label: "Home",    path: "/"} ),
  h(Link, { label: "Contact", path: "/contact"} ),
]

const createNavigation = createComponent => {
  const Link = createComponent(_Link)
  const Navigation = createComponent(_Navigation, null, { Link })
  return Navigation
}
export default createNavigation

// src/app.js

import createNavigation from "./shared/Navigation"
const Navigation = createNavigation(createComponent)

// Use:
h(Navigation)
```



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
  * 1.4 Kb gzipped
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
