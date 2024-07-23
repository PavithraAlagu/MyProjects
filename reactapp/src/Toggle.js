import React from 'react'
import colorNames from 'colornames'

const Toggle = ({color,setColor,setHexValue,darkText,setDarkText}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    <input className='colorField' type="text" 
      id='color'
      value={color}
      onChange={
        (e)=>{setColor(e.target.value);
        setHexValue(colorNames(e.target.value));
    }}
      placeholder='Add Color'
      aria-label='color text'
      />
    <button id='toggle'
    type='button'
    className='toggleButton'
    onClick={()=>setDarkText(!darkText)}
    > Toggle Color</button>
    </form>
  )
}

export default Toggle