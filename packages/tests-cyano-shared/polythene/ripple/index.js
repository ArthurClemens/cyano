import { pointerEndEvent, filterSupportedAttributes, isServer } from "polythene-core";
import animation from "./animation";
import classes from "polythene-css-classes/ripple";
import { cast, h, a } from "cyano"

const createProps = ({ props }) => {
  return {
    // ...filterSupportedAttributes(props),
    ...(props.testId && { "data-test-id": props.testId }),
    className: [
      classes.component,
      props.unconstrained ? classes.unconstrained : null,
      props.tone === "dark" ? "pe-dark-tone" : null,
      props.tone === "light" ? "pe-light-tone" : null,
      props.className || props[a.class],
    ].join(" ")
  };
};

const _Ripple = props => {
  return h(props.element || "div",
    createProps({ props }),
  );
};

export default cast(_Ripple);
