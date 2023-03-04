// eslint-disable-next-line import/no-unresolved
import { a, cast, h, useState } from 'cyano';

import friendsData from './friends-data';
import FriendStatus from './FriendStatus';

const _ChatRecipientPicker = () => {
  const [recipientId, setRecipientId] = useState('1');

  return h('div', { className: 'controls' }, [
    h(FriendStatus, { key: recipientId, friendId: recipientId }),
    h(
      'div',
      {
        className: 'select',
        key: 'select',
      },
      h(
        'select',
        {
          [a.onchange]: e => setRecipientId(e.target.value),
          value: recipientId,
        },
        friendsData.map(friend =>
          h(
            'option',
            {
              value: friend.id,
              key: friend.id,
            },
            friend.name,
          ),
        ),
      ),
    ),
  ]);
};

export default cast(_ChatRecipientPicker);
