import React, { useState } from 'react';
import "../styles/InputOptions.css";

function InputOptions(props) {
  const [color,setColor] = useState(props.color)

  const changeColor = (altColor)=>{

      color==altColor?setColor("gray"):setColor(altColor)
  }



  return (
    <div className='inputOption' onClick={()=>changeColor("blue")}>
        <props.Icon  style={{color:color}} />
        <h4>{props.title}</h4>
    </div>
  )
}

export default InputOptions
