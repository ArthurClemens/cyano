import { cast, h } from 'cyano';

const _Trust = () =>
  h.fragment({}, [
    h(
      'div',
      {
        key: 'svg',
        'data-test-id': 'svg',
      },
      h.trust(
        '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
      ),
    ),
    h(
      'div',
      {
        key: 'html',
        'data-test-id': 'html',
      },
      h.trust(
        '<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>',
      ),
    ),
    h(
      'div',
      {
        key: 'wrapper',
        'data-test-id': 'wrapper',
      },
      h.trust('Hello', 'span'),
    ),
  ]);

export default cast(_Trust);
