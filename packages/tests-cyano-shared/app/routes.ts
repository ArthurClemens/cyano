// examples
import { Component } from 'cyano';

import Children from '../cypress-tests/Children';
// Cypress tests
import CustomHooks from '../cypress-tests/custom-hooks';
import ForwardRef from '../cypress-tests/forwardRef';
import Fragment from '../cypress-tests/Fragment';
import GetRef from '../cypress-tests/getRef';
import InitialProps from '../cypress-tests/initial-props';
import Toggle from '../cypress-tests/toggle';
import Trust from '../cypress-tests/Trust';
import Chat from '../examples/chat';
import CustomHooksUseReducer from '../examples/custom-hooks-reducer';
import SimpleToggle from '../examples/Toggle';
import { RouteData } from './types';

type InputLinkData = [label: string, path: string, component: Component];

const toLinkData = ([label, path, component]: InputLinkData) =>
  ({
    name: label.toLowerCase().replace(' ', '_'),
    label,
    path,
    component,
  } as RouteData);

export const createRoutes = () => {
  const examples = (
    [
      ['Simple toggle', '/simple-toggle', SimpleToggle],
      [
        'Custom hooks with useReducer',
        '/custom-hooks-usereducer',
        CustomHooksUseReducer,
      ],
      ['Custom hooks chat example', '/custom-hooks-chat', Chat],
    ] as InputLinkData[]
  ).map(toLinkData);

  const tests = (
    [
      ['Test custom hooks', '/TestCustomHooks', CustomHooks],
      ['Test initial props', '/TestInitialProps', InitialProps],
      ['Test getRef', '/GetRef', GetRef],
      ['Test trust', '/TestTrust', Trust],
      ['Test children', '/TestChildren', Children],
      ['Test forward ref', '/ForwardRef', ForwardRef],
      ['Test toggle', '/Toggle', Toggle],
      ['Test fragment', '/Fragment', Fragment],
    ] as InputLinkData[]
  ).map(toLinkData);

  return {
    examples,
    tests,
  };
};
