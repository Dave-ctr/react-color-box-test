import React from "react";

const ColorSelector = ({ handleColorSelection }) => {
  return (
    <form className="colorSelectionForm">
      <input
        autoFocus
        id="colorSelection"
        type="text"
        placeholder="Add Color Name"
        onChange={handleColorSelection}
        required
      />
    </form>
  );
};

export default ColorSelector;
