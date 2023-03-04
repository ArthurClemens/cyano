// eslint-disable-next-line import/no-unresolved
import { cast, Children, h, ResultNode } from 'cyano';

export type LayoutProps = {
  navigation: ResultNode;
  children?: Children;
};

const _Layout = ({ navigation, children }: LayoutProps) =>
  h(
    'div',
    {
      className: 'layout',
    },
    [
      navigation,
      h(
        'div',
        {
          // key: "component",
          className: 'component',
        },
        children,
      ),
    ],
  );

const Layout = cast(_Layout);

export default Layout;
