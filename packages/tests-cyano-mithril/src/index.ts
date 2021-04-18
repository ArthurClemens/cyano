import { cast } from 'cyano-mithril';
import m from 'mithril';
import { createApp } from 'tests-cyano-shared/app/createApp';

const mountNode = document.querySelector('#root');

const setContent = ({ AppLayout, ...props }) => {
  if (mountNode) {
    m.mount(mountNode, {
      view: () => m(AppLayout, props),
    });
  }
};

createApp({
  setContent,
  cast,
});
