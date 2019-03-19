const Toggle = ({ useState, h, a }) => {
  const [clicked, setClicked] = useState(false);
  return h(".toggle", [
    h("button",
      {
        className: `button ${clicked ? "is-info" : ""}`,
        [a.onclick]: () => setClicked(!clicked)
      },
      "Toggle"
    ),
    h(".info", clicked ? "On" : "Off")
  ]);
};

export default Toggle;
