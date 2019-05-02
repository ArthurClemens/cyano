
// examples
import Toggle from "../examples/toggle";
import CustomHooksUseReducer from "../examples/custom-hooks-reducer";
import Chat from "../examples/chat";

// Cypress tests
import CustomHooks from "../cypress-tests/custom-hooks";
import Trust from "../cypress-tests/trust";
import Children from "../cypress-tests/children";
import InitialProps from "../cypress-tests/initial-props";
import ToggleJSX from "../cypress-tests/toggle-jsx";
import GetRef from "../cypress-tests/getRef";
import ForwardRef from "../cypress-tests/forwardRef";

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
    ["Custom hooks chat example", "/custom-hooks-chat", Chat],
  ].map(toLinkData);

  const tests = [
    ["Test custom hooks", "/TestCustomHooks", CustomHooks],
    ["Test initial props", "/TestInitialProps", InitialProps],
    ["Test getRef", "/GetRef", GetRef],
    ["Test trust", "/TestTrust", Trust],
    ["Test children", "/TestChildren", Children],
    ["Test forward ref", "/ForwardRef", ForwardRef],
    ["Test toggle JSX", "/ToggleJSX", ToggleJSX],
  ].map(toLinkData);

  return {
    examples,
    tests,
  };
};
