import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

const routerOptions = {
  useHash: true,
  hashPrefix: "!"
};

export const setupRouter = ({ routes, setContent }) => {

  const { name: defaultRoute } = routes[0];
  const router = createRouter(routes, {
    defaultRoute
  });

  router.usePlugin(browserPlugin(routerOptions));

  router.subscribe(({ route }) => {
    const routeData = routes.find(({ path }) => path === route.path);
    if (routeData) {
      const { component } = routeData;
      setContent({ content: component, route, router });
    }
  });

  router.start();
};
