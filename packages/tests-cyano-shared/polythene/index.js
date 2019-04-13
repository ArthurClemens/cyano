import { cast, h } from "cyano";
import Button from "./button";

const _Polythene = () => {
  return [
    h(Button, { key: "button", label: "Polythene button" })
  ]
};

export default cast(_Polythene);
