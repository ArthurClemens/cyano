// eslint-disable-next-line import/no-unresolved
import { cast, Children, Component, h } from 'cyano';

type Props = {
  title: string;
  children?: Children;
};

const _ComponentWithChildren = ({ title, children }: Props) =>
  h(
    'div',
    {
      'data-test-id': 'Children',
    },
    [h('h2', title), children],
  );

type WrapperProps = {
  title: string;
  ComponentWithChildren: Component<Props>;
};

const _Wrapper = ({ title, ComponentWithChildren }: WrapperProps) =>
  h(
    'div',
    null,
    h(ComponentWithChildren, { title }, h('div', null, 'This is a child')),
  );

const ComponentWithChildren = cast(_ComponentWithChildren);
const Wrapper = cast(_Wrapper, {
  title: 'Children',
  ComponentWithChildren,
});

export default Wrapper;
