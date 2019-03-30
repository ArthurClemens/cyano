import { cast, useState, h, a } from "cyano";

const _Toggle = () => {
  const [clicked, setClicked] = useState(false);
  return h("div", 
    {
      className: "toggle"
    },
    [
      h("button",
        {
          className: `button ${clicked ? "is-info" : ""}`,
          [a.onclick]: () => setClicked(!clicked)
        },
        "Toggle"
      ),
      h("div",
        {
          className: "info"
        },
        clicked ? "On" : "Off"
      )
    ]
  );
};

export default cast(_Toggle);
