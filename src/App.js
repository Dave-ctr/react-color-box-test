import './App.css';
import ColorPalette from './ColorPalette.js';
import ColorSelector from './ColorSelector.js';
import { colors } from './colors.js';
import { useState } from 'react'

function App()
{

  const [ color, setColor ] = useState( 'Empty Input' )

  const handleColorSelection = ( color ) =>
  {
    const colorList = colors;
    colorList.forEach( ( color ) => ( color ) );
  }

  return (
    <div className="App">

      <ColorPalette
        color={ color }
        setColor={ setColor }
      />
      <ColorSelector
        color={ color }
        setColor={ setColor }
        handleColorSelection={ handleColorSelection }
      />

    </div>
  );
}

export default App;
