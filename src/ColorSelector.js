import React from "react";

const ColorSelector = ( { colorChoice, handleColorSelection } ) =>
{
  console.log( colorChoice )
  return (
    <form className="colorSelectionForm">
      <input
        autoFocus
        id='colorSelection'
        type="text"
        placeholder='Add Color Name'
        onChange={ handleColorSelection }
        required
      />
    </form>
  )
};

export default ColorSelector;
