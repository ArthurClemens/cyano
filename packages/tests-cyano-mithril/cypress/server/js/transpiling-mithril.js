import { createComponent } from "../../../dist/cyano-mithril.mjs";
import { Counter } from "../components/counter";
import { customHooks } from "../components/counter-custom-hooks";

const MithrilCounter = createComponent(Counter, customHooks);

const App = {
  view: () =>
    m(MithrilCounter, { initialCount: 0 })
}

m.mount(
  document.querySelector("#root"),
  App
);
