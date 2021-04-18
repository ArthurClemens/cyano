# Cyano

Takes a base component and returns a Mithril or React component. This is useful if you want to support both Mithril and React with a minimum of duplicate code.

- [Online examples](#online-examples)
- [Getting started](#getting-started)
  - [Install](#install)
  - [Import](#import)
    - [Writing applications](#writing-applications)
    - [Writing libraries](#writing-libraries)
- [Usage](#usage)
  - [Write a single codebase, deploy twice](#write-a-single-codebase-deploy-twice)
  - [Shared language](#shared-language)
  - [Using hooks](#using-hooks)
    - [Supported hooks](#supported-hooks)
    - [Custom hooks](#custom-hooks)
  - [Importing options](#importing-options)
    - [Import for applications (aliasing "cyano")](#import-for-applications-aliasing-cyano)
      - [Configuring](#configuring)
      - [Code example](#code-example)
      - [Passing or nesting components](#passing-or-nesting-components)
    - [Import for libraries (passing Cyano methods)](#import-for-libraries-passing-cyano-methods)
  - [Solving issues](#solving-issues)
    - [Issues with keys](#issues-with-keys)
- [API](#api)
  - [cast](#cast)
  - [h (render function)](#h-render-function)
    - [Inserting trusted content](#inserting-trusted-content)
    - [Wrapping fragments](#wrapping-fragments)
  - [a (HTML attributes)](#a-html-attributes)
  - [getRef](#getref)
  - [Children](#children)
  - [jsx](#jsx)
- [Additional setup when aliasing "cyano"](#additional-setup-when-aliasing-cyano)
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


## Online examples

* Simple toggle
  * [Mithril](https://codesandbox.io/s/cyano-mithril-simple-toggle-pj801)
  * [React](https://codesandbox.io/s/cyano-react-simple-counter-66n7c)


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

There are 2 methods for importing Cyano in your code. Which one to choose depends on your goal.

#### Writing applications

When writing an application, it is possible to use identical code for both Mithril and React. This method uses an import from "cyano" which the bundler will resolve to either the Mithril or React version.

See: [Import for applications (aliasing "cyano")](#import-for-applications-aliasing-cyano)

#### Writing libraries

When writing a library, you don't want your library users to burden with a special Cyano setup. Imports need to be resolved after bundling.

This means that Mithril and React components are created in separate files, which pass Cyano methods to shared core component code.

See: [Import for libraries (passing Cyano methods)](#import-for-libraries-passing-cyano-methods)


## Usage

### Write a single codebase, deploy twice

The basic idea behind Cyano is to make code portable to both Mithril and React.

Perhaps you are a library author who wants to have more users benefit from your solution. You can write once and deploy twice.

Or you are introducing Mithril in a company that is inclined to use React. By supporting both libraries you can hold out a decision until the team has had some more experience.

Cyano lets you create Mithril and React components from shared base components. To make these base components interoperable, they need to understand a shared language.

### Shared language

**Hooks instead of lifecycle methods**

Base components are "functional components" - render functions without lifecycle/class methods.

[React Hooks](https://reactjs.org/docs/hooks-intro.html) are a replacement for functionality that was previously available only in (React) classes. By replacing class lifecycles with hooks, code becomes more succinct and easier to reason about. Hooks make it trivial to define logic outside of the component and to import parts where needed. Local state and lifecycle methods can be implemented using hooks with little effort.

* React Hooks have been introduced in React 16.8.
* For Mithril hooks are implemented with helper library [mithril-hooks](https://github.com/ArthurClemens/mithril-hooks).


**Hyperscript or JSX**

Base components can be written in hyperscript or JSX.

If you choose hyperscript: [React Without JSX](https://reactjs.org/docs/react-without-jsx.html) demonstrates how to use `React.createElement` to write component code. Cyano uses an enhanced version by means of [react-hyperscript](https://github.com/mlmorg/react-hyperscript), which is more lenient in omitting properties and keys.

If you choose JSX, see [Configuring JSX](#configuring-jsx) how to setup JSX rendering. JSX can be used for both React and Mithril.

**Dictionary of HTML attributes**

React follows the camelCase convention for "official" HTML attributes, whereas Mithril uses lowercase names. Helper variable `a` maps the lowercase attribute name to an accepted one.

For example:

`a.onclick` returns "onclick" for Mithril and "onClick" for React.

**Helper functions**

| **Variable** | **Description**                                                  | **API doc**                                                 |
| ------------ | ---------------------------------------------------------------- | ----------------------------------------------------------- |
| `cast`       | Takes a base component and returns a Mithril or React component. | [cast](#cast)                                               |
| `h`          | The render function for hyperscript.                             | [h (render function)](#h-render-function)                   |
| `h.trust`    | Function to insert HTML                                          | [Inserting trusted content](#inserting-trusted-content)     |
| `h.fragment` | Function to wrap elements in a fragment                          | [Inserting trusted content](#inserting-trusted-content)     |
| `getRef`     | Callback function that gets a reference to the DOM element.      | [getRef](#getref)                                           |
| `a`          | Dictionary of accepted HTML attributes.                          | [a (Accepted HTML attributes)](#a-accepted-html-attributes) |
| `jsx`        | Babel pragma, import this when writing JSX.                      | [jsx](#jsx)                                                 |


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


### Importing options

#### Import for applications (aliasing "cyano")

NOTE: This methods is not recommended for writing libraries. See: [Import for libraries (passing Cyano methods)](#import-for-libraries-passing-cyano-methods) for the alternative approach.

The "aliasing" method uses an import from "cyano" which the bundler will resolve to either the Mithril or React version.

```javascript
import { cast /*, useState, h, a, etcetera */ } from "cyano"
```

Our bundler will resolve "cyano" to either `cyano-react` or `cyano-mithril`. 


##### Configuring

We need to let the bundler point from "cyano" to `cyano-react` or `cyano-mithril`. See instructions for bundlers below:

- [Configuring Webpack](#configuring-webpack)
- [Configuring Rollup](#configuring-rollup)
- [Configuring Browserify](#configuring-browserify)

##### Code example

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


##### Passing or nesting components

Example: a Navigation component that contains Link components.

Either convert the Link before using:

```javascript
import { cast, h, a } from "cyano"

const _Link = () => {
  // ...
}
const Link = cast(_Link)

const _Navigation = () => [
  h(Link, { label: "Home",    path: "/"} ),
  h(Link, { label: "Contact", path: "/contact"} ),
]
const Navigation = cast(_Navigation)
```

Or pass the converted Link as initial parameter to Navigation:

```javascript
import { cast, h, a } from "cyano"

const _Link = () => {
  // ...
}

const _Navigation = ({ Link }) => [
  h(Link, { label: "Home",    path: "/"} ),
  h(Link, { label: "Contact", path: "/contact"} ),
]

const Link = cast(_Link)
const Navigation = cast(_Navigation, { Link })
```

#### Import for libraries (passing Cyano methods)

Mithril and React components are created in separate files, which pass Cyano methods to shared core component code.

```javascript
// react-button

import { _Button } from "core-button"
import { Icon } from "react-icon"
import { cast, h, a, useState, useEffect, useRef, getRef } from "cyano-react"

export const Button = cast(_Button, { h, a, getRef, useState, useEffect, useRef, Icon })
```

```javascript
// core-button

export const _Button = ({ h, a, getRef, useState, useEffect, useRef, Icon, ...props }) => {
  // etcetera
}
```

### Solving issues

#### Issues with keys

This case may trip you up:

```javascript
[
  h("div",
    { key: 1 }
  ),
  [2,3,4].map(n => // Error when Mithril runs this code
    h("div",
      { key: n },
      n
    )
  )
]
```

Mithril will throw an error because not all children in the array have a key.

The reason is that React and Mithril handle arrays differently: React flattens inner arrays, but Mithril doesn't.

This code ends up processed this way for each:

```javascript
[
  h("div", { key: 1 }),
  [
    h("div", { key: 2 })
  ]
]
```

In React:

```javascript
// Everything's flattened, so everything's keyed as expected
[
  h("div", { key: 1 }),
  h("div", { key: 2 }),
]
```

In Mithril:

```javascript
h.fragment([
  h("div", { key: 1 }),
  h.fragment([ // Lacks a key, so an error is thrown
    h("div", { key: 2 }),
  ]),
])
```

To solve this in a cross-platform way, rewrite the tripping-up code with a keyed wrapper fragment:

```javascript
[
  h("div",
    { key: 1 }
  ),
  h.fragment(
    { key: "numbers" },
    [2,3,4].map(n =>
      h("div",
        { key: n },
        n
      )
    )
  )
]
```


## API

### cast

Takes a base component and returns a Mithril or React component.

**Signature**

`cast(renderFunction, initialProps?) => Component`

| **Argument**     | **Type**           | **Required** | **Description**                                                                                                    |
| ---------------- | ------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------ |
| `renderFunction` | Function component | Yes          | The base/common/shared functional component to be converted for Mithril or React                                   |
| `initialProps`   | Object             | No           | Any variable to pass to `renderFunction`; see also [Passing or nesting components](#passing-or-nesting-components) |
| **Returns**      | Component          |              |                                                                                                                    |

The returned `Component` can be called as any component:

```javascript
h(Component, {
  // component props
})
```

The component render function that is called will receive a combined object of `initialProps` and component props, plus property [children](#children):

```javascript
const _Component = ({ defaultTitle, title, children )} => {
  // ...
}

const Component = cast(_Component, { defaultTitle: "a blue sky" })

h(Component,
  { title: "casting a shadow" },
  h("div", "Cloud child")  
)
```

### h (render function)

The render function for hyperscript.

**Signature**

`h(selector, properties?, children?) => Element`

| **Argument** | **Type**                                          | **Required** | **Description**                       |
| ------------ | ------------------------------------------------- | ------------ | ------------------------------------- |
| `selector`   | `String|Object`                                   | Yes          | A CSS selector or a component         |
| `properties` | `Object`                                          | No           | HTML attributes or element properties |
| `children`   | `Array<Vnode|ReactElement>|String|Number|Boolean` | No           | Child nodes                           |
| **Returns**  | `Vnode` (for Mithril); `ReactElement` for React   |              |                                       |

#### Inserting trusted content

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

| **Argument** | **Type**                                        | **Required** | **Default**                                      | **Description**                       |
| ------------ | ----------------------------------------------- | ------------ | ------------------------------------------------ | ------------------------------------- |
| `html`       | `String`                                        | Yes          |                                                  | A string containing HTML or SVG text. |
| `wrapper`    | Element tag name                                | No           | `cyano-react`: "div"; `cyano-mithril`: undefined | Wrapper element                       |
| **Returns**  | `Vnode` (for Mithril); `ReactElement` for React |              |                                                  |


#### Wrapping fragments

Both Mithril and React have a concept called "fragments" to group children in a list:

* Mitril: [m.fragment](https://mithril.js.org/fragment.html)
* React: [Fragment](https://reactjs.org/docs/fragments.html)

There are key differences between both libraries:

* React's `Fragment` only supports property `key`, but does some smart handling of inserting extra HTML elements (see the doc example for table rows)
* Mithrils `m.fragment` supports lifecycle methods in properties, but does not do any magic with HTML elements

Cyano's bridge function `h.fragment` is oblivious to either library, so you could make use of either implementation, but for cross-platform code you'd need to stick to property `key` and make no assumptions on handling HTML elements around the fragment.

**Signature**

`h.fragment(properties?, children) => Element`

| **Argument** | **Type**                                          | **Required** | **Default** | **Description**                        |
| ------------ | ------------------------------------------------- | ------------ | ----------- | -------------------------------------- |
| `properties` | `object`                                          | No           |             | For cross-library code: only use `key` |
| `children`   | `Array<Vnode|ReactElement>|String|Number|Boolean` | No           | Child nodes |
| **Returns**  | `Vnode` (for Mithril); `ReactElement` for React   |              |             |



### a (HTML attributes)

Dictionary of accepted HTML attributes.

`a` maps the lowercase attribute name to an accepted one. Instead of `onClick` (for React) or (`onclick` (for Mithril) you write:

```javascript
[a.onclick]: () => setClicked(!clicked)
```

or in JSX:

```jsx
{...{
  [a.onclick]: () => setClicked(!clicked)
}}
```

Complete list of included html attributes:

* [for Mithril](https://github.com/ArthurClemens/cyano/blob/master/packages/cyano-mithril/src/htmlAttributes.js)
* [for React](https://github.com/ArthurClemens/cyano/blob/master/packages/cyano-react/src/htmlAttributes.js)

### getRef

Callback function `getRef` gets a reference to the DOM element.

**Signature**

`getRef(fn)`

| **Argument** | **Type**                             | **Required** | **Description**                           |
| ------------ | ------------------------------------ | ------------ | ----------------------------------------- |
| `fn`         | `Function`                           | Yes          | Function that receives the DOM reference. |
| **Returns**  | `function ref(dom) { /* use dom */}` |              |                                           |

`getRef` accepts a function that receives the DOM reference.

DOM reference are commonly stored in a `useRef` object, with property `current` to store the data. Note that setting or updating `useRef` will not cause a re-render.

```javascript
import { useRef, h, a, getRef } from "cyano"

const _Component = () => {
  const domRef = useRef()
  
  return (
    h("div", 
      {
        ...getRef(dom => domRef.current = domRef.current || dom) // React will call this each render
      },
      "My component"
    )
  )
}
```

The example above contains a check to prevent superfluous updates to the variable `domRef`.

**Forward refs**

When `getRef` is passed to a component, the component props will contain the function `ref`. This can be used from the parent:

```javascript
// Input.js

h("input",
  {
    ...getRef(dom => dom && !domElement && (
      setDomElement(dom),
      // pass back to parent
      props.ref && props.ref(dom)
    ))
  }
)
 
// parent that uses Input
h(Input, {
  ref: dom => (
    setDomElement(dom)
  )
})
```

**Under the hood**

* `cyano-mithril`:
  * `getRef` uses Mithril's lifecycle method `oncreate` to access the DOM element. This method will be called once.
* `cyano-react`:
  * `getRef` uses React's `ref` method to access the DOM element. This method will be called on each render. When the element is removed from the DOM, `getRef` will receive `null`. Using an update check as shown above will prevent that the reference will be lost.

### Children

Child elements are accessed through the component prop `children`:

```javascript
const _Component = ({ children }) => {
  return [
    h("h2", "My title"),
    children
  ]
}
```
### jsx

Babel pragma. Only import this when writing JSX.


## Additional setup when aliasing "cyano"

NOTE: This setup is only needed when using identical code for both Mithril and React. This can be used in applications but is not recommended for writing libraries.

### Bundler configuration

We need to let the bundler point from "cyano" to `cyano-react` or `cyano-mithril`. 

Each bundler has a different method to to this - it is generally called "map" or "alias".

**Environment variable setup**

The examples below show how to direct from "cyano" to "cyano-mithril". When you are using the same bundler scripts for both Mithril and React, you should consider to configure the alias, for instance by using an environment variable.

Example (using Webpack):

* [Setting the environment variable](https://github.com/ArthurClemens/cyano/blob/master/packages/tests-cyano-mithril/package.json#L13)
* [Reading the environment variable](https://github.com/ArthurClemens/cyano/blob/master/scripts/webpack.config.js#L7)
* [Using the environment variable to set an alias](https://github.com/ArthurClemens/cyano/blob/master/scripts/webpack.config.js#L30)


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
      resolveTo: path.resolve(baseDir, "node_modules/cyano-mithril/dist/cyano-mithril.module.js"),
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
import { jsx } from "cyano"
```

### React and Webpack

It may be necessary to point Webpack to the React module. Add an entry to `resolve.alias` in the config:

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
  * 2.89 kB with all dependencies, minified and gzipped
  * Includes [mithril-hooks](https://github.com/ArthurClemens/mithril-hooks)
* `cyano-react.js`:
  * 2.12 kB with all dependencies, minified and gzipped
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
