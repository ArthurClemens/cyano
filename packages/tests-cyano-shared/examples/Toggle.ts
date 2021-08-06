import { a, cast, h, useState } from 'cyano';

export default cast(() => {
  const [clicked, setClicked] = useState(false);
  return h(
    'div',
    {
      className: 'toggle',
    },
    [
      h(
        'button',
        {
          className: `button ${clicked ? 'is-info' : ''}`,
          [a.onclick]: () => setClicked(!clicked),
        },
        'Toggle',
      ),
      h(
        'div',
        {
          className: 'info',
        },
        clicked ? 'On' : 'Off',
      ),
    ],
  );
});
