import { useState } from "react";

const State = () => {
  const [color, setColor] = useState({
    text: "red",
    background: "yellow",
  });
  return (
    <div>
      I am <strong>{color.text}</strong> in color
      <button
        onClick={() =>
          setColor((prevColor) => {
            return { ...prevColor, text: "brown" };
          })
        }
      >
        Change me
      </button>
    </div>
  );
};

export default State;
