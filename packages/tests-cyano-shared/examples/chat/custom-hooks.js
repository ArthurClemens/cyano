// eslint-disable-next-line import/no-unresolved
import { useEffect, useState } from 'cyano';

import { api } from './chat-api';

export const useFriendStatus = friendId => {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    api.subscribeToFriendStatus(friendId, handleStatusChange);
    return () => {
      api.unsubscribeFromFriendStatus(friendId, handleStatusChange);
    };
  }, [friendId]);

  return isOnline;
};
