import { Component } from 'cyano';
import { State } from 'router5';

import AppLayout, { AppLayoutProps } from './AppLayout';
import Layout, { LayoutProps } from './Layout';
import Navigation, { NavigationProps } from './Navigation';
import { setupRouter } from './router';
import { createRoutes } from './routes';
import { AppRouter, RouteData } from './types';

export type SetContentProps = {
  AppLayout: Component<AppLayoutProps>;
  Layout: Component<LayoutProps>;
  Navigation: Component<NavigationProps>;
  routes: RouteData[];
  examples: RouteData[];
  tests: RouteData[];
  content: Component;
  route: State;
  router: AppRouter;
};

type Props = {
  setContent: (props: SetContentProps) => void;
};

export const createApp = ({ setContent }: Props) => {
  const { examples, tests } = createRoutes();
  const routes = examples.concat(tests);

  setupRouter({
    routes,
    setContent: ({ content, route, router }) =>
      setContent({
        AppLayout,
        Layout,
        Navigation,
        routes,
        examples,
        tests,
        content,
        route,
        router,
      }),
  });
};
