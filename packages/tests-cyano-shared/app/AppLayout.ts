import { cast, Component, h } from 'cyano';
import { State } from 'router5';

import { LayoutProps } from './Layout';
import { NavigationProps } from './Navigation';
import { AppRouter, RouteData } from './types';

export type AppLayoutProps = {
  Layout: Component<LayoutProps>;
  Navigation: Component<NavigationProps>;
  router: AppRouter;
  route: State;
  content: Component;
  examples: RouteData[];
  tests: RouteData[];
};

const _AppLayout = ({
  Layout,
  Navigation,
  route,
  router,
  content,
  examples,
  tests,
}: AppLayoutProps) =>
  h(
    Layout,
    {
      navigation: h(Navigation, {
        router,
        currentPath: route.path,
        parts: [
          ['Examples', examples],
          ['Cypress tests', tests],
        ],
      }),
    },
    h(content),
  );

const AppLayout = cast(_AppLayout);

export default AppLayout;
