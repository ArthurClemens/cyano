const _AppLayout = ({ h, Layout, Navigation, route, router, content, examples, tests }) =>
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
  );

  export const createAppLayout = createComponent => {
    const AppLayout = createComponent(_AppLayout);
    return AppLayout;
  };
  