import { isServer, pointerStartMoveEvent, pointerEndMoveEvent, deprecation } from "polythene-core";
import Button from "../Button";
import { cast, h, a, useState, useEffect, useRef } from "cyano";

const DEFAULT_SHADOW_DEPTH = 1;
const DEFAULT_SHADOW_DEPTH_INCREASE = 1;
const MAX_SHADOW_DEPTH = 5;

const downButtons = [];

/*
useRef combined with useState to enforce re-render.
*/
const useStateWithRef = initialValue => {
  const value = useRef(initialValue);
  const [_, setValue] = useState(value.current);
  return [
    value,
    newValue => (
      value.current = newValue,
      setValue(value.current)
    )
  ]
};

const animateZ = (which, getButtonProps) => {
  const {
    shadowDepthBase,
    shadowDepthRef,
    setShadowDepth,
    increase,
  } = getButtonProps();
  const newShadowDepth = which === "down" && shadowDepthBase < MAX_SHADOW_DEPTH
    ? Math.min(shadowDepthBase + increase, MAX_SHADOW_DEPTH)
    : which === "up"
      ? Math.max(shadowDepthRef.current - increase, shadowDepthBase)
      : shadowDepthRef.current;
  if (newShadowDepth !== shadowDepthRef.current) {
    setShadowDepth(newShadowDepth);
  }
};

const tapHandler = ({ which, getButtonProps }) => {
  if (which === "down") {
    downButtons.push(getButtonProps);
  }
  animateZ(which, getButtonProps);
};

const _RaisedButton = props => {
  const [shadowDepthBase] = useState(props.shadowDepth !== undefined ? props.shadowDepth : DEFAULT_SHADOW_DEPTH);
  const [shadowDepthRef, setShadowDepth] = useStateWithRef(shadowDepthBase);
  const [domElement, setDomElement] = useState();
  const increase = props.increase || DEFAULT_SHADOW_DEPTH_INCREASE;
  const animateOnTap = props.animateOnTap !== false ? true : false;

  const getButtonProps = () => ({
    shadowDepthBase,
    shadowDepthRef,
    setShadowDepth,
    increase,
  });
  
  useEffect(
    () => {
      // Init tap events
      if (isServer || !domElement || !animateOnTap) return;
      const tapStart = () => tapHandler({ which: "down", getButtonProps });
      const tapEndAll = () => {
        downButtons.map(getButtonProps =>
          tapHandler({ which: "up", getButtonProps }));
        downButtons.length = 0;
      };
      pointerStartMoveEvent.forEach(evt =>
        domElement.addEventListener(evt, tapStart));
      pointerEndMoveEvent.forEach(evt =>
        document.addEventListener(evt, tapEndAll));
      // Clear tap events
      return () => {
        pointerStartMoveEvent.forEach(evt =>
          domElement.removeEventListener(evt, tapStart));
        pointerEndMoveEvent.forEach(evt =>
          document.removeEventListener(evt, tapEndAll));
      }
    },
    [domElement]
  );

  const componentProps = Object.assign({},
    {
      raised: true,
      animateOnTap: false,
      wash: props.wash !== undefined
        ? props.wash
        : false,
      ...props,
      shadowDepth: props.disabled ? 0 : shadowDepthRef.current,
      getDom: dom => dom && !domElement && setDomElement(dom),
    }
  );

  return h(Button, componentProps, props.children);
};

export default cast(_RaisedButton);
