import React from "react";

const ColorPalette = ({ color, hexValue, isLightText }) => {
  return (
    <div
      className="colorPalette"
      style={{ color: isLightText ? "#000" : "#FFF", backgroundColor: color }}
    >
      <p>{color ? color : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default ColorPalette;
