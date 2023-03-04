import './css/app.css';
import './css/custom-hooks-usereducer.css';
import './css/toggle.css';
import './css/chat.css';

import { Component } from 'cyano-mithril';
import m from 'mithril';
import {
  AppLayoutProps,
  createApp,
  SetContentProps,
} from 'tests-cyano-shared/app';

const mountNode = document.querySelector('#root');

type Props = {
  AppLayout: Component<AppLayoutProps>;
} & Omit<SetContentProps, 'AppLayout'>;

const setContent = ({ AppLayout, ...props }: Props) => {
  if (mountNode) {
    m.mount(mountNode, {
      view: () => m(AppLayout, props),
    });
  }
};

createApp({
  setContent,
});
