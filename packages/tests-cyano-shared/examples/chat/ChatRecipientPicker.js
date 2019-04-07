import { cast, useState, h, a } from "cyano";
/*
To make this component library agnostic, use:

import { cast, useState, h, a } from "cyano";

and create an alias from "cyano" => "cyano" / "cyano-react" 
in your bundler configuration.
*/

import FriendStatus from "./FriendStatus";
import friendsData from "./friends-data";

const _ChatRecipientPicker = () => {
  const [recipientId, setRecipientId] = useState("1");

  return h("div",
    { className: "controls" },
    [
      h(FriendStatus, { key: recipientId, friendId: recipientId }),
      h("div",
        { className: "select" },
        h("select",
          {
            [a.onchange]: e => setRecipientId(e.target.value),
            value: recipientId
          },
          friendsData.map(friend => (
            h("option",
              {
                value: friend.id,
              },
              friend.name
            )
          ))
        )
      )
    ]
  )
};

export default cast(_ChatRecipientPicker);
