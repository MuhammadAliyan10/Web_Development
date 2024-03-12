import React, { useRef } from "react";

const Ref = () => {
  const btn = useRef(null);
  const handleChange = () => {
    const backgroundElement = btn.current;
    if (backgroundElement) {
      backgroundElement.style.backgroundColor = "blue";
    }
  };
  return (
    <div>
      <button onClick={handleChange}>My color</button>
      <button ref={btn}>Color</button>
    </div>
  );
};

export default Ref;
