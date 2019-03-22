import { createAppLayout } from "./AppLayout";
import { createLayout } from "./Layout";
import { createNavigation } from "./Navigation";
import { createRoutes } from "./routes";
import { setupRouter } from "./router";

export const createApp = ({ setContent, createComponent }) => {
  const { examples, tests } = createRoutes(createComponent);
  const AppLayout = createAppLayout(createComponent);
  const Layout = createLayout(createComponent);
  const Navigation = createNavigation(createComponent);
  const routes = examples.concat(tests);

  setupRouter({
    routes,
    setContent: ({ content, route, router }) => setContent({
      AppLayout,
      Layout,
      Navigation,
      routes,
      examples,
      tests,
      content,
      route,
      router,
    })
  });
};
