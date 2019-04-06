import { cast, h, a, useState } from "cyano";
import friendsData from "./friends-data";
import ChatRecipientPicker from "./ChatRecipientPicker";
import Friend from "./Friend"; 

const _Chat = () => { 
  const [hasChatApi, setHasChatApi] = useState(false);
  return h("div",
    { className: "chat" },
    [
      h("div",
        { className: "controls" },
        h("button",
          {
            className: hasChatApi ? "button" : "button is-link",
            [a.onclick]: () => setHasChatApi(!hasChatApi)
          },
          hasChatApi ? "Deactivate chat" : "Activate chat"
        )
      ),
      hasChatApi ? h(ChatRecipientPicker) : null,
      h("div",
        { className: "friends" },
        friendsData.map(friend => (
          h(Friend, {
            friend,
            hasChatApi,
          })
        ))
      )
    ]
  );
};

export default cast(_Chat);
