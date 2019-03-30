import { createComponent, h } from "cyano";

const _InitialProps = ({ title, defaultTitle }) => {
  return h("div",
    {
      "data-test-id": "InitialProps"
    },
    [
      h("h2", null, title || defaultTitle),
      // h("h2", defaultTitle),
    ]
  );
};

const _Wrapper = ({ title, InitialProps }) => 
  h("div",
    null,
    h(InitialProps,
      { title }
    )
  );

const InitialProps = createComponent(_InitialProps, { defaultTitle: "default title" });
const Wrapper = createComponent(_Wrapper, { title: "Hello", InitialProps });

export default Wrapper;
