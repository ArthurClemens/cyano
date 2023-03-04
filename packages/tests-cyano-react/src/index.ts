import './css/app.css';
import './css/custom-hooks-usereducer.css';
import './css/toggle.css';
import './css/chat.css';

// eslint-disable-next-line import/no-unresolved
import { h } from 'cyano';
import ReactDOM from 'react-dom';
import { createApp } from '../../tests-cyano-shared/app/createApp';

const mountNode = document.querySelector('#root');

const setContent = ({ AppLayout, ...props }) => {
  ReactDOM.render(h(AppLayout, props), mountNode);
};

createApp({
  setContent,
});
