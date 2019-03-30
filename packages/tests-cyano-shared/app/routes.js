
// examples
import Toggle from "../examples/Toggle";
import CustomHooksUseReducer from "../examples/CustomHooksUseReducer";

// Cypress tests
import CustomHooks from "../cypress-tests/CustomHooks";
import Trust from "../cypress-tests/Trust";
import Children from "../cypress-tests/Children";
import InitialProps from "../cypress-tests/InitialProps";
import ToggleJSX from "../cypress-tests/ToggleJSX";

const toLinkData = ([label, path, component]) => ({
  name: label.toLowerCase().replace(" ", "_"),
  label,
  path,
  component
});

export const createRoutes = cast => {
  
  const examples = [
    ["Simple toggle", "/toggle", Toggle],
    ["Custom hooks with useReducer", "/custom-hooks-usereducer", CustomHooksUseReducer],
  ].map(toLinkData);

  const tests = [
    ["Test custom hooks", "/TestCustomHooks", CustomHooks],
    ["Test trust", "/TestTrust", Trust],
    ["Test children", "/TestChildren", Children],
    ["Test initial props", "/TestInitialProps", InitialProps],
    ["Test toggle JSX", "/ToggleJSX", ToggleJSX],
  ].map(toLinkData);

  return {
    examples,
    tests,
  };
};
