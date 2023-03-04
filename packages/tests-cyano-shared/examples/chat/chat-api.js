const friendsData = {
  0: {
    status: {
      isOnline: true,
    },
  },
  1: {
    status: {
      isOnline: true,
    },
  },
  2: {
    status: {
      isOnline: false,
    },
  },
};

export const api = {
  subscribeToFriendStatus: (friendId, handleStatusChange) => {
    const friend = friendsData[friendId];
    // console.log(`subscribing status for ${friendId}`);
    friend.status.isOnline = friendId !== '2';
    const delay = 200 + 100 * Math.random();
    setTimeout(() => handleStatusChange(friend.status), delay);
  },
  unsubscribeFromFriendStatus: (friendId, handleStatusChange) => {
    const friend = friendsData[friendId];
    friend.status.isOnline = null;
    // console.log(`unsubscribing status for ${friendId}`);
    handleStatusChange(friend.status);
  },
};
