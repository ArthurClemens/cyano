import { a, cast, h, useState } from 'cyano';

type Props = {
  title: string;
};

const _Toggle = ({ title }: Props) => {
  const [clicked, setClicked] = useState(false);
  return h('.toggle', [
    h('h2', { key: 'title' }, title),
    h(
      'div',
      {
        className: `button ${clicked ? 'is-info' : ''}`,
        [a.onclick]: () => setClicked(!clicked),
      },
      'Toggle',
    ),
    h('.info', { key: 'status' }, clicked ? h('div', 'On') : h('div', 'Off')),
    h(
      'div',
      { key: 'rest' },
      h.trust(
        '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
      ),
    ),
  ]);
};

const Toggle = cast(_Toggle);

const _Wrapper = () => h(Toggle, { title: 'Switch!' });
export default cast(_Wrapper);
