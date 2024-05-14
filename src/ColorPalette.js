import React from "react";

const ColorPalette = ( { color } ) =>
{



  return (
    <div className='colorPalette' style={ { backgroundColor: color } }>
      { !color && 'Empty Value' }
    </div >
  )
};

export default ColorPalette;
