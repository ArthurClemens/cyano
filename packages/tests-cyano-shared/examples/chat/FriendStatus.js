// eslint-disable-next-line import/no-unresolved
import { cast, h } from 'cyano';

import { useFriendStatus } from './custom-hooks';

const _FriendStatus = ({ friendId }) => {
  const isOnline = useFriendStatus(friendId);
  return isOnline === null
    ? h('div', { className: 'status-dot unknown' })
    : isOnline
    ? h('div', { className: 'status-dot online' })
    : h('div', { className: 'status-dot offline' });
};

export default cast(_FriendStatus);
