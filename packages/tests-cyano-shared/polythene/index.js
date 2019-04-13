import { cast, h } from "cyano";
import Button from "./Button";
import Icon from "./Icon";

const iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";
const trustedIconStars = h.trust(iconStars);

const _Polythene = () => {
  return [
    h("div",
      { key: "button 1" },
      h(Button, { label: "Polythene button" })
    ),
    h("div",
      { key: "button 2" },
      h(Button, { label: "Polythene button", dropdown: true })
    ),
    h("div",
      { key: "button 3" },
      h(Button, { label: "Polythene button", shadowDepth: 1 })
    ),
    h("div",
      { key: "icon 1" },
      h(Icon, { content: trustedIconStars }),
    ),
  ]
};

export default cast(_Polythene);
