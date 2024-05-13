import './App.css';
import ColorPalette from './ColorPalette.js';
import ColorSelector from './ColorSelector.js';
import { colors } from './colors.js';
import { useState } from 'react'

function App()
{
  const colorList = colors;

  const [ color, setColor ] = useState( 'Empty Value' )

  const [ colorChoice, setColorChoice ] = useState( '' );

  const handleColorSelection = ( event ) =>
  {
    const inputedColor = event.target.value;
    setColorChoice( inputedColor );
  }



  return (
    <div className="App">

      <ColorPalette
        color={ color }
      />
      <ColorSelector
        colorChoice={ colorChoice }
        handleColorSelection={ handleColorSelection }
      />

    </div>
  );
}

export default App;
