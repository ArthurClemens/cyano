import { filterSupportedAttributes, iconDropdownDown } from "polythene-core";
import classes from "polythene-css-classes/button";
import "polythene-css-button";
import Ripple from "../Ripple";
import Shadow from "../Shadow";
import Icon from "../Icon";
import { cast, h, a, getDom, useState } from "cyano";

const _Button = props => {
  const [isInactive] = useState(props.inactive);
  const [domElement, setDomElement] = useState();

  const disabled = props.disabled;
  const inactive = props.inactive || isInactive;
  const onClickHandler = props.events && props.events[a.onclick];
  const onKeyUpHandler = (props.events && props.events[a.onkeyup]) || onClickHandler;

  const componentProps = Object.assign({},
    filterSupportedAttributes(props, { add: [a.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
    getDom(dom => dom && !domElement && setDomElement(dom)),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.super,
        props.parentClassName || classes.component,
        props.contained ? classes.contained : null,
        props.raised ? classes.contained : null,
        props.raised ? classes.raised : null,
        props.selected ? classes.selected : null,
        props.highLabel ? classes.highLabel : null,
        props.extraWide ? classes.extraWide : null,
        disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        props.separatorAtStart ? classes.separatorAtStart : null,
        (props.border || props.borders) ? classes.border : null,
        props.dropdown ? classes.hasDropdown : null,
        props.dropdown
          ? props.dropdown.open
            ? classes.dropdownOpen
            : classes.dropdownClosed
          : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    },
    props.events,
    inactive ? null : {
      [a.tabindex]: disabled || inactive
        ? -1
        : props[a.tabindex] || 0,
      [a.onclick]: onClickHandler,
      [a.onkeyup]: e => {
        if (e.keyCode === 13 && state.focus()) {
          state.focus(false);
          if (onKeyUpHandler) {
            onKeyUpHandler(e);
          }
        }
      }
    },
    props.url,
    disabled ? { disabled: true } : null
  );

  const noink = props.ink !== undefined && props.ink === false;
  const children = props.children;
  const label = props.content
    ? props.content
    : props.label !== undefined
      ? typeof props.label === "object"
        ? props.label
        : h("div",
          { className: classes.label },
          h("div",
            {
              className: classes.textLabel,
              style: props.textStyle
            },
            props.label
          )
        )
      : children
        ? children
        : null;
  const noWash = disabled || (props.wash !== undefined && !props.wash);
  
  return h(props.element || "div",
    componentProps,
    h("div",
      {
        [a.className]: classes.content,
        style: props.style
      },
      [
        h(Shadow, {
          key: "shadow",
          shadowDepth: props.shadowDepth !== undefined
            ? props.shadowDepth
            : 0,
          animated: true
        }),
        disabled || noink
          ? null
          : h(props.Ripple, Object.assign({},
            {
              key: "ripple",
              target: domElement
            },
            props.ripple
          )),
        noWash ? null : h("div", { key: "wash", className: classes.wash }),
        label,
        props.dropdown
          ? h(Icon,
            {
              className: classes.dropdown,
              key: "dropdown",
              svg: { content: h.trust(iconDropdownDown) }
            }
          )
          : null
      ]
    )
  );
};

export default cast(_Button, { Ripple });
