// examples
import Children from '../cypress-tests/children';
// Cypress tests
import CustomHooks from '../cypress-tests/custom-hooks';
import ForwardRef from '../cypress-tests/forwardRef';
import Fragment from '../cypress-tests/Fragment';
import GetRef from '../cypress-tests/getRef';
import InitialProps from '../cypress-tests/initial-props';
import ToggleJSX from '../cypress-tests/toggle-jsx';
import Trust from '../cypress-tests/Trust';
import Chat from '../examples/chat';
import CustomHooksUseReducer from '../examples/custom-hooks-reducer';
import Toggle from '../examples/toggle';

const toLinkData = ([label, path, component]) => ({
  name: label.toLowerCase().replace(' ', '_'),
  label,
  path,
  component,
});

export const createRoutes = cast => {
  const examples = [
    ['Simple toggle', '/toggle', Toggle],
    [
      'Custom hooks with useReducer',
      '/custom-hooks-usereducer',
      CustomHooksUseReducer,
    ],
    ['Custom hooks chat example', '/custom-hooks-chat', Chat],
  ].map(toLinkData);

  const tests = [
    ['Test custom hooks', '/TestCustomHooks', CustomHooks],
    ['Test initial props', '/TestInitialProps', InitialProps],
    ['Test getRef', '/GetRef', GetRef],
    ['Test trust', '/TestTrust', Trust],
    ['Test children', '/TestChildren', Children],
    ['Test forward ref', '/ForwardRef', ForwardRef],
    ['Test toggle JSX', '/ToggleJSX', ToggleJSX],
    ['Test fragment', '/Fragment', Fragment],
  ].map(toLinkData);

  return {
    examples,
    tests,
  };
};
