import { cast, h } from "cyano";
import FriendStatus from "./FriendStatus";

const _Friend = ({ friend, hasChatApi }) => {
  return h("div",
    { className: "friend" },
    [
      h("div",
        {
          className: "avatar",
          style: {
            backgroundImage: `url(${friend.avatar})`
          }
        }
      ),
      h("div", { className: "name" }, friend.name),
      h("div", { className: "spacer" }),
      hasChatApi
        ? h("div", null,
            h(FriendStatus,
              {
                friendId: friend.id
              }
            )
          )
          : null
    ]
  );
};

export default cast(_Friend);
