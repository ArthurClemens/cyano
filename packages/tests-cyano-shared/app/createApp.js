import AppLayout from "./AppLayout";
import Layout from "./Layout";
import Navigation from "./Navigation";
import { createRoutes } from "./routes";
import { setupRouter } from "./router";

export const createApp = ({ setContent, createComponent }) => {
  const { examples, tests } = createRoutes(createComponent);
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
