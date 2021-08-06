import { cast, Component, h } from 'cyano';

type Props = {
  title?: string;
  defaultTitle?: string;
};

const _InitialProps = ({ title, defaultTitle }: Props) =>
  h(
    'div',
    {
      'data-test-id': 'InitialProps',
    },
    [
      h('h2', null, title || defaultTitle),
      // h("h2", defaultTitle),
    ],
  );

type WrapperProps = {
  title: string;
  InitialProps: Component<Props>;
};

const _Wrapper = ({ title, InitialProps }: WrapperProps) =>
  h('div', null, h(InitialProps, { title }));

const InitialProps = cast<Props>(_InitialProps, {
  defaultTitle: 'default title',
});
const Wrapper = cast<WrapperProps>(_Wrapper, { title: 'Hello', InitialProps });

export default Wrapper;
