import React from "react";

const ColorSelector = ( { color, setColor, handleColorSelector } ) =>
{
  return (
    <form className="colorSelectionForm">
      <label htmlFor="colorSelection">Choose Color
      </label>
      <input
        autoFocus
        id='colorSelection'
        type="text"
        placeholder='Input Color'
        required
      />
      <button
        type='submit'
      >Color It!!
      </button>
    </form>
  )
};

export default ColorSelector;
