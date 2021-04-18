import AppLayout from './AppLayout';
import Layout from './Layout';
import Navigation from './Navigation';
import { setupRouter } from './router';
import { createRoutes } from './routes';

export const createApp = ({ setContent, cast }) => {
  const { examples, tests } = createRoutes(cast);
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
