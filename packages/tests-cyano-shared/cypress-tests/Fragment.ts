// eslint-disable-next-line import/no-unresolved
import { cast, h } from 'cyano';

const _Fragment = () =>
  h('div.wrapper', { key: 'controls', 'data-test-id': 'wrapper' }, [
    h('div.first', { key: 1, 'data-test-id': 'child-1' }, 1),
    h.fragment(
      { key: 'numbers' },
      [2, 3, 4].map(n => h('div', { key: n, 'data-test-id': `child-${n}` }, n)),
    ),
  ]);

const Fragment = cast(_Fragment);

export default Fragment;
