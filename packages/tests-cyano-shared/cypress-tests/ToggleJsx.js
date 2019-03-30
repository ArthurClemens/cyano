import { cast, useState, a, h, jsx } from "cyano";
/* jsx needs to be in scope for JSX parsing to work */

const _Toggle = ({ title }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="toggle">
      <h2>{title}</h2>
      <div
        className={`button ${clicked ? "is-info" : ""}`}
        {...{
          [a.onclick]: () => setClicked(!clicked)
        }}
      >
        Toggle
      </div>
      <div
        className="info"
      >
        {clicked ? h("div", "On") : h("div", "Off")}
      </div>
      <div>
        {h.trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>")}
      </div>
    </div>
  );
};

const Toggle = cast(_Toggle);

const _Wrapper = () => <Toggle title="Switch!" />;
export default cast(_Wrapper);
