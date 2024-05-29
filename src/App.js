import "./App.css";
import ColorPalette from "./ColorPalette.js";
import ColorSelector from "./ColorSelector.js";
import { useState } from "react";
import colorNames from "colornames";
import Button from "./Button.js";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [colorChoice, setColorChoice] = useState("");
  const [isLightText, setIsLightText] = useState(false);

  const handleColorSelection = (event) => {
    const inputedColor = event.target.value;
    setColorChoice(inputedColor);
    setHexValue(colorNames(inputedColor));
    inputedColor ? setColor(inputedColor) : setColor("");
  };

  return (
    <div className="App">
      <ColorPalette
        color={color}
        hexValue={hexValue}
        isLightText={isLightText}
      />
      <ColorSelector
        colorChoice={colorChoice}
        setHexValue={setHexValue}
        handleColorSelection={handleColorSelection}
      />
      <Button isLightText={isLightText} setIsLightText={setIsLightText} />
    </div>
  );
}

export default App;
