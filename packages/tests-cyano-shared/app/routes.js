
// examples
import { createToggle } from "../examples/Toggle";
import { createCounter } from "../examples/CustomHooksUseReducer";

// Cypress tests
import { createCustomHooks } from "../cypress-tests/CustomHooks";
import { createTrust } from "../cypress-tests/Trust";

const toLinkData = ([label, path, component]) => ({
  name: label.toLowerCase().replace(" ", "_"),
  label,
  path,
  component
});

export const createRoutes = createComponent => {
  
  const examples = [
    ["Simple toggle", "/toggle", createToggle(createComponent)],
    ["Custom hooks with useReducer", "/custom-hooks-usereducer", createCounter(createComponent)],
  ].map(toLinkData);

  const tests = [
    ["Test custom hooks", "/TestCustomHooks", createCustomHooks(createComponent)],
    ["Test trust", "/TestTrust", createTrust(createComponent)],
  ].map(toLinkData);

  return {
    examples,
    tests,
  };
};
