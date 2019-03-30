# Cyano

Takes a base component and returns a Mithril or React component. This is useful if you want to support both libraries with a minimum of duplicate code.

- [Getting started](#getting-started)
  - [Install](#install)
  - [Import](#import)
  - [Configuring](#configuring)
  - [Code example](#code-example)
- [Usage](#usage)
  - [Write a single codebase, deploy twice](#write-a-single-codebase-deploy-twice)
  - [Shared language](#shared-language)
  - [Using hooks](#using-hooks)
    - [Supported hooks](#supported-hooks)
    - [Custom hooks](#custom-hooks)
  - [Passing or nesting components](#passing-or-nesting-components)
- [API](#api)
  - [cast](#cast)
  - [h (render function)](#h-render-function)
  - [Inserting trusted content](#inserting-trusted-content)
  - [a (Accepted HTML attributes)](#a-accepted-html-attributes)
  - [getDom](#getdom)
  - [jsx](#jsx)
  - [Children](#children)
- [Additional setup](#additional-setup)
  - [Bundler configuration](#bundler-configuration)
    - [Configuring Webpack](#configuring-webpack)
    - [Configuring Rollup](#configuring-rollup)
    - [Configuring Browserify](#configuring-browserify)
  - [Configuring JSX](#configuring-jsx)
  - [React and Webpack](#react-and-webpack)
- [Compatibility](#compatibility)
- [Size](#size)
- [Supported browsers](#supported-browsers)
- [License](#license)


## Getting started

Usage of Cyano requires setting an alias setting in your bundler configuration. Read on for details.

### Install

With Mithril:

```bash
npm install cyano-mithril
```

With React:

```bash
npm install cyano-react
```

### Import

We use an import from alias "cyano". By making this import library agnostic, we can use indentical code for either library.

```javascript
import { cast /*, useState, h, a, etcetera */ } from "cyano"
```

### Configuring

We need to let the bundler point from "cyano" to `cyano-react` or `cyano-mithril`. See instructions for bundlers below:

- [Configuring Webpack](#configuring-webpack)
- [Configuring Rollup](#configuring-rollup)
- [Configuring Browserify](#configuring-browserify)

### Code example

Due to our agnostic (aliased) import from "cyano", the component code for React and Mithril is identical.

**Hyperscript**

```javascript
import { cast, useState, h, a } from "cyano"

const _Toggle = ({ title }) => {
  const [clicked, setClicked] = useState(false)
  
  return h(".toggle", [
    h("h2", title),
    h("button",
      {
        [a.onclick]: () => setClicked(!clicked)
      },
      "Toggle"
    ),
    h("div",
      clicked ? "On" : "Off"
    )
  ])
}

const Toggle = cast(_Toggle)

// Use:
h(Toggle, { title: "Switch!" })
```

**JSX**

The same code written in JSX. See [Configuring JSX](#configuring-jsx) how to setup JSX rendering.

```jsx
import { cast, useState, a, jsx } from "cyano"
/* jsx needs to be in scope for JSX to work */

const _Toggle = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="toggle">
      <h2>{title}</h2>
      <div
        className={`button ${clicked ? "is-info" : ""}`}
        {...{
          [a.onclick]: () => setClicked(!clicked)
        }}>
        Toggle
      </div>
      <div className="info">
        {clicked ? "On" : "Off"}
      </div>
    </div>
  )
}

const Toggle = cast(_Toggle)

// Use:
<Toggle title="Switch!" />
```

Note the HTML attribute "onclick" that must be passed in the properties object, because we can't use dynamic keys for JSX attributes.


## Usage

### Write a single codebase, deploy twice

The basic idea behind Cyano is to make code portable to both Mithril and React.

Perhaps you are a library author who wants to have more users benefit from your solution. You can write once and deploy twice.

Or you are introducing Mithril in a company that is inclined to use React. By supporting both libraries you can hold out a decision until the team has had some more experience.

Cyano lets you create Mithril and React components from shared base components. To make these base components interoperable, they need to understand a shared language.

### Shared language

**Hooks instead of lifecycle methods**

Base components are "functional components" - render functions without lifecycle/class methods.

[React Hooks](https://reactjs.org/docs/hooks-intro.html) are a replacement for React classes. Local state and lifecycle methods can be implemented using hooks with little effort.

* React Hooks have been introduced in React 16.8 but seem to have taken off.
* For Mithril hooks are implemented with helper library [mithril-hooks](https://github.com/ArthurClemens/mithril-hooks).

Hooks make it trivial to define logic outside of the component and to import parts where needed.

**Hyperscript or JSX**

Base components can be written in hyperscript of JSX.

If you choose hyperscript: [React Without JSX](https://reactjs.org/docs/react-without-jsx.html) demonstrates how to use `React.createElement` to write component code. Cyano uses an enhanced version through [react-hyperscript](https://github.com/mlmorg/react-hyperscript), which is more lenient in omitting properties and keys.

If you choose JSX, see [Configuring JSX](#configuring-jsx) how to setup JSX rendering.

**Dictionary of accepted HTML attributes**

React follows the camelCase convention for accepted HTML attributes, whereas Mithril uses lowercase names.

Imported variable `a` will map the lowercase attribute name to an accepted one. Instead of `onClick` (for React) or (`onclick` (for Mithril) you write:

```javascript
[a.onclick]: () => setClicked(!clicked)
```

or in JSX:

```jsx
{...{
  [a.onclick]: () => setClicked(!clicked)
}}
```

**Helper functions**

| **Variable**      | **Description** | **Doc** |
| ----------------- | --------------- | ----------- |
| `cast`            | Takes a base component and returns a Mithril or React component. | [cast](#cast) | 
| `h`               | The render function for hyperscript. | [h (render function)](#h-render-function) |
| `getDom`          | Callback function that gets a reference to the DOM element. | [getDom](#getdom) |
| `a`               | Dictionary of accepted HTML attributes. | [a (Accepted HTML attributes)](#a-accepted-html-attributes) |
| `jsx`             | Babel pragma, only import when writing JSX. | [jsx](#jsx) |


### Using hooks

Base components have access to default hooks (see "supported hooks" below) and custom hooks.

```javascript
import { h, a, useState, useEffect } from "cyano"

const SharedCounter = ({ initialCount }) => {
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

#### Supported hooks

* `useState`
* `useEffect`
* `useLayoutEffect`
* `useReducer`
* `useRef`
* `useMemo`
* `useCallback`

These React hooks make little sense with Mithril and are not included:

* `useContext`
* `useImperativeHandle`
* `useDebugValue`


#### Custom hooks

General introduction in React's documentation: [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

Using hooks with Mithril: see [mithril-hooks](https://github.com/ArthurClemens/mithril-hooks) for examples.


### Passing or nesting components

Example: a base Navigation component that contains Link components.

Either convert the Link before using:

```javascript
import { cast, h, a } from "cyano"
import _Link from "./shared/Link"

const Link = cast(_Link)

const _Navigation = () => [
  h(Link, { label: "Home",    path: "/"} ),
  h(Link, { label: "Contact", path: "/contact"} ),
]
const Navigation = cast(_Navigation)
```

Or pass the converted Link as parameter to Navigation:

```javascript
import { cast, h, a } from "cyano"
import _Link from "./shared/Link"

const _Navigation = ({ Link }) => [
  h(Link, { label: "Home",    path: "/"} ),
  h(Link, { label: "Contact", path: "/contact"} ),
]

const Link = cast(_Link)
const Navigation = cast(_Navigation, { Link })
```


## API

### cast

Takes a base component and returns a Mithril or React component.

**Signature**

`cast(renderFunction, initialProps?) => Component`

| **Argument**    | **Type**  | **Required** | **Description** |
| --- | --- | --- | --- | 
| `renderFunction` | Function component | Yes | The base/common/shared functional component to be converted for Mithril or React |
| `initialProps`   | Object | No | Any variable to pass to `renderFunction`; see also [Passing or nesting components](#passing-or-nesting-components) | 
| **Returns** | Component |||

The returned `Component` can be called as any component:

```javascript
h(Component, {
  // component props
})
```

The component render function that is called will receive a combined object of `initialProps` and component props:

```javascript
const _Component = allProps => {...}
```

### h (render function)

The render function for hyperscript.

**Signature**

`h(selector, properties?, children?) => Element`

| **Argument**    | **Type**  | **Required** | **Description** |
| --- | --- | --- | --- | 
| `selector` | `String|Object` | Yes | A CSS selector or a component |
| `properties` | `Object` | No | HTML attributes or element properties |
| `children` | `Array<Vnode|ReactElement>|String|Number|Boolean` | No | Child nodes |
| **Returns** | `Vnode` (for Mithril); `ReactElement` for React |||

### Inserting trusted content

Mithril's API contains [m.trust](https://mithril.js.org/trust.html) that "turns an HTML or SVG string into unescaped HTML or SVG". The documentation continues with the warning

> Do not use m.trust on unsanitized user input. Always try to use an [alternative method](https://mithril.js.org/trust.html#avoid-trusting-html) first, before considering using m.trust.

With this caveat, it is sometimes useful to insert a piece of HTML or SVG into a container.

The render function `h` is enhanced with method `trust` to do that:

```javascript
const iconBack = h.trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>")
```

`cyano-react` uses `dangerouslySetInnerHTML` to set trusted content with a "div" as wrapper element. The element tag can be set with the second parameter.

For consistency, `cyano-mithril` function `h.trust` is enhanced with this second parameter too.

**Signature**

`h.trust(html, wrapper) => Element`

| **Argument**    | **Type**  | **Required** | **Default** | **Description** |
| --- | --- | --- | --- | --- | 
| `html` | `String` | Yes | | A string containing HTML or SVG text. |
| `wrapper` | Element tag name | No | `cyano-react`: "div"; `cyano-mithril`: undefined | Wrapper element |
| **Returns** | `Vnode` (for Mithril); `ReactElement` for React |||

### a (Accepted HTML attributes)

Dictionary of accepted HTML attributes.

`a.onclick` returns "onclick" for Mithril and "onClick" for React.

### getDom

Callback function `getDom` gets a reference to the DOM element.

**Signature**

`getDom(fn)`

| **Argument**    | **Type**  | **Required** | **Description** |
| --- | --- | --- | --- | --- | 
| `fn` | `Function` | Yes | Function that receives the DOM reference. |
| **Returns** | `function(dom) { /* use dom */}` |||

`getDom` accepts a function that receives the DOM reference.

DOM reference are commonly stored in a `useRef` object, with property `current` to store the data. Note that setting or updating `useRef` will not cause a re-render.

```javascript
import { useRef, h, a, getDom } from "cyano"

const _Component = () => {
  const domRef = useRef()
  
  return (
    h("div", 
      {
        ...getDom(dom => domRef.current = domRef.current || dom) // React will call this each render
      },
      "My component"
    )
  )
}
```

The example above contains a check to prevent superfluous updates to the variable `domRef`.

**Under the hood**

* `cyano-mithril`: `getDom` uses Mithril's lifecycle method `oncreate` to access the DOM element. This method will be called once.
* `cyano-react`: `getDom` uses React's `ref` method to access the DOM element. This method will be called on each render. When the element is removed from the DOM, `getDom` will receive `null`. Using an update check as shown above will prevent that the reference will be lost.

### jsx

Babel pragma. Only import this when writing JSX.

### Children

Child elements are accessed through the component prop `children`:

```javascript
const _Component = ({ children }) => {
  return [
    m("h2", "My title"),
    children
  ]
}
```

## Additional setup

### Bundler configuration

This is a required step in the setup.

We need to let the bundler point from "cyano" to `cyano-react` or `cyano-mithril`. 

Each bundler has a different method to to this - it is generally called "map" or "alias".

The examples below show how to direct from "cyano" to "cyano-mithril". When you are using the same bundler scripts for both Mithril and React, you should consider to configure the alias, for instance by using an environment variable. See [tests-cyano-mithril/package.json](https://github.com/ArthurClemens/cyano/blob/master/packages/tests-cyano-mithril/package.json#L7) for an example.

#### Configuring Webpack

```javascript
// webpack.config.js

const path = require("path");
const baseDir = process.cwd();
```

Then add to the configuration:

```javascript
resolve: {
  alias: {
    "cyano": path.resolve(baseDir, "node_modules/cyano-mithril"),
  }
}
```

#### Configuring Rollup

Use [rollup-plugin-pathmodify](https://www.npmjs.com/package/rollup-plugin-pathmodify):

```javascript
// rollup.config.js

import path from "path";
import pathmodify from "rollup-plugin-pathmodify";

const baseDir = process.cwd();
```

Then add to plugins:

```javascript
pathmodify({
  aliases: [
    {
      id: "cyano",
      resolveTo: path.resolve(baseDir, "node_modules/cyano-mithril/dist/cyano-mithril.mjs"),
    },
  ]
})
```

#### Configuring Browserify

Use the [pathmodify](https://www.npmjs.com/package/pathmodify) plugin to change the default config path to your custom file:

```javascript
const path = require("path");
const pathmodify = require('pathmodify');

const baseDir = process.cwd();
```

Then add to `browserify()`:

```javascript
.plugin(pathmodify, {
  mods: [
    pathmodify.mod.id("cyano", path.resolve(baseDir, "node_modules/cyano-mithril")),
  ]
})
// ...
```

### Configuring JSX

This is an optional step.

Install `@babel/plugin-transform-react-jsx` and add to the `plugins` in your Babel configuration:

```javascript
["@babel/plugin-transform-react-jsx", {
  "pragma": "jsx"
}]
```

`jsx` is a variable exported by Cyano. This needs to be in scope when using JSX in component code (but does not need to be called explicitly):

```javascript
import { cast, a, jsx } from "cyano"
```

### React and Webpack

It may be necessary to point Webpack to the React module. Add a `resolve` entry to the config:

```javascript
resolve: {
  alias: {
    "react": path.resolve(baseDir, "node_modules/react"),
  },
},
```

## Compatibility

* Mithril: tested with Mithril 1.1.6 and Mithril 2.x
* React: tested with React 16.8.4


## Size

* `cyano-mithril.js`:
  * 1.8 Kb gzipped
  * Includes [mithril-hooks](https://github.com/ArthurClemens/mithril-hooks)
* `cyano-react.js`:
  * 1.4 Kb gzipped
  * Includes [react-hyperscript](https://github.com/mlmorg/react-hyperscript)


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
