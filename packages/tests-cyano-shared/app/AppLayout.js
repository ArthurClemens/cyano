import { createComponent, h } from "cyano";

const _AppLayout = ({ Layout, Navigation, route, router, content, examples, tests }) => (
  h(Layout,
    {
      route,
      router,
      navigation: h(Navigation, {
        router,
        currentPath: route.path,
        parts: [
          ["Examples", examples],
          ["Cypress tests", tests]
        ]
      })
    },
    h(content)
  )
);

const AppLayout = createComponent(_AppLayout);

export default AppLayout;
