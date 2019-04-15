import classes from "polythene-css-classes/icon-button";
import { cast, h, a } from "cyano";
import Icon from "../Icon";
import Button from "../Button";

const _IconButton = props => {
  const content = props.content
    ? props.content
    : props.icon
      ? h(Icon, props.icon)
      : props.children;
  const componentProps = Object.assign(
    {},
    props.testId && { "data-test-id": props.testId },
    {
      content: h("div", { className: classes.content }, content),
      after: props.label && h("div", { className: classes.label }, props.label),
      parentClassName: [
        props.parentClassName || classes.component,
        props.compact ? classes.compact : null,
      ].join(" "),
      // defaults
      wash: false,
      animateOnTap: false
    },
    props
  );

  return h(Button,
    componentProps
  );
};

export default cast(_IconButton);
