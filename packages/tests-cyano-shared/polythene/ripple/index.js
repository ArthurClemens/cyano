import { pointerEndEvent, filterSupportedAttributes, isServer } from "polythene-core";
import animation from "./animation";
import classes from "polythene-css-classes/ripple";
import { cast, h, a, getDom, useState, useEffect } from "cyano"

const useAnimationsState = () => {
  const [animations, setAnimations] = useState({});
  return [
    animations,
    (addId, animation) => setAnimations(Object.assign(
      {},
      animations,
      { [addId]: animation }
    )),
    removeId => {
      const updated = Object.assign({}, animations);
      delete(updated[removeId]);
      setAnimations(updated);
    }
  ]
};

const _Ripple = props => {
  const [domElement, setDomElement] = useState();
  const [animations, addAnimation, removeAnimation] = useAnimationsState();
  const isAnimating = Object.keys(animations).length > 0;
  const triggerEl = props.target || (domElement ? domElement.parentElement : undefined);
  console.log("props.target", props.target, "triggerEl", triggerEl);
  
  const tap = e => {
    if (props.disabled || (!props.multi && isAnimating)) {
      return;
    }
    if (props.start) {
      props.start(e);
    }
    const id = `ripple_animation_${new Date().getTime()}`;
    const rippleAnimation = animation({ e, id, el: domElement, props, classes })
      .then(evt => {
        if (props.end) {
          props.end(evt);
        }
        removeAnimation(id);
      });
    addAnimation(id, rippleAnimation);
  };

  useEffect(
    () => {
      if (triggerEl) {
        pointerEndEvent.forEach(evt =>
          triggerEl.addEventListener(evt, tap, false));
      }
      return () => {
        if (triggerEl) {
          pointerEndEvent.forEach(evt =>
            triggerEl.removeEventListener(evt, tap, false));
        }
      }
    },
    [triggerEl]
  );

  return h(props.element || "div",
    {
      ...filterSupportedAttributes(props),
      ...getDom(dom => dom && !domElement && setDomElement(dom)),
      ...(props.testId && { "data-test-id": props.testId }),
      className: [
        classes.component,
        props.unconstrained ? classes.unconstrained : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    }
  );
};

export default cast(_Ripple);
