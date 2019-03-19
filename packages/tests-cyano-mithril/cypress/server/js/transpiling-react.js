import React from "react";
import { createComponent } from "../../../dist/cyano-react.mjs";
import { Counter } from "../components/counter";
import { customHooks } from "../components/counter-custom-hooks";

const ReactCounter = createComponent(Counter, customHooks);

const App = () => 
  <ReactCounter initialCount={0} />;

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
