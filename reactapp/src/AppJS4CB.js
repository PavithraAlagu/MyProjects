import './App.css';
import ColorBox from './ColorBox';
import Toggle from './Toggle';
import { useState } from 'react';
function App() {

  const [color,setColor]= useState('')
  const [hexValue,setHexValue]= useState('')
  const [darkText,setDarkText]=useState(true)
  
  return (
    <div>
     <ColorBox
     color={color}
     hexValue={hexValue}
     darkText={darkText}
     />
     
     <Toggle
     color={color}
     hexValue={hexValue}
     darkText={darkText}
     setColor={setColor}
     setHexValue={setHexValue}
     setDarkText={setDarkText}
     />
    </div>
  );
}

export default App;
