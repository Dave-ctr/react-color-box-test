import './App.css';
import ColorPalette from './ColorPalette.js';
import ColorSelector from './ColorSelector.js';
import { useState } from 'react'

function App()
{

  const [ color, setColor ] = useState( 'Empty value' )

  const [ colorChoice, setColorChoice ] = useState( '' );

  const handleColorSelection = ( event ) =>
  {
    const inputedColor = event.target.value;
    setColorChoice( inputedColor );
    inputedColor ? setColor( inputedColor ) : setColor( '' );
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
