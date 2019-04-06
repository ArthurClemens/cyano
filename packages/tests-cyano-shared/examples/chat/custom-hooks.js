import { api } from "./chat-api";
import { useState, useEffect } from "cyano";

export const useFriendStatus = friendId => {
  const [isOnline, setIsOnline] = useState(null);
  
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(
    () => {
      api.subscribeToFriendStatus(friendId, handleStatusChange);
      return () => {
        api.unsubscribeFromFriendStatus(friendId, handleStatusChange);
      }
    },
    []
  );
  
  return isOnline;
};
