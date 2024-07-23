import React from 'react'

const ColorBox = ({color,hexValue,darkText}) => {
  return (
    
      <section style=
      {{
        backgroundColor:color,
        color:darkText ? 'black':'white'
      }} 
      className='colorBox'
      name="colorbox" 
      id="colorbox"
      value={color}
      placeholder="Empty Value"
      aria-label='color box'>
        <p>{color?color:"Empty Value"}</p>
        <p>{hexValue? hexValue:null}</p>
      </section>
      
    
  )
}

export default ColorBox