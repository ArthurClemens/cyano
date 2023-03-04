// eslint-disable-next-line import/no-unresolved
import { a, cast, h } from 'cyano';

import { AppRouter, RouteData } from './types';

type LinkProps = {
  router: AppRouter;
  name: string;
  label: string;
  path: string;
  currentPath: string;
};

const _Link = ({ router, name, label, path, currentPath }: LinkProps) =>
  h(
    'li',
    {},
    h(
      'a',
      {
        href: path,
        className: path === currentPath ? 'is-active' : '',
        [a.onclick]: (e: Event) => {
          e.preventDefault();
          router.navigate(name);
        },
      },
      label,
    ),
  );
const Link = cast(_Link);

type MenuListProps = {
  router: AppRouter;
  title: string;
  links: RouteData[];
  currentPath: string;
};

const _MenuList = ({ router, title, links, currentPath }: MenuListProps) =>
  h('', [
    h(
      'p',
      {
        key: 'label',
        className: 'menu-label',
      },
      title,
    ),
    h(
      'ul',
      {
        key: 'list',
        className: 'menu-list',
      },
      links.map(link => h(Link, { ...link, router, currentPath })),
    ),
  ]);
const MenuList = cast(_MenuList);

export type NavigationPart = [title: string, links: RouteData[]];

export type NavigationProps = {
  router: AppRouter;
  currentPath: string;
  parts: NavigationPart[];
};
const _Navigation = ({ router, currentPath, parts }: NavigationProps) =>
  h(
    'aside',
    {
      className: 'menu',
    },
    parts.map(([title, links]) =>
      h(MenuList, { router, title, links, currentPath }),
    ),
  );

export default cast(_Navigation);
