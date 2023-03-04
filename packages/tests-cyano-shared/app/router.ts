// eslint-disable-next-line import/no-unresolved
import { Component } from 'cyano';
import createRouter, { State } from 'router5';
import browserPlugin from 'router5-plugin-browser';

import { AppRouter, RouteData } from './types';

const routerOptions = {
  useHash: true,
  hashPrefix: '!',
};

type Props = {
  routes: RouteData[];
  setContent: (props: {
    content: Component;
    route: State;
    router: AppRouter;
  }) => void;
};

export const setupRouter = ({ routes, setContent }: Props) => {
  const { name: defaultRoute } = routes[0];
  const router = createRouter(routes, {
    defaultRoute,
  });

  router.usePlugin(browserPlugin(routerOptions));

  router.subscribe(({ route }) => {
    const routeData = routes.find(
      ({ path }: { path: string }) => path === route.path,
    );
    if (routeData) {
      const { component } = routeData;
      setContent({ content: component, route, router });
    }
  });

  router.start();
};
