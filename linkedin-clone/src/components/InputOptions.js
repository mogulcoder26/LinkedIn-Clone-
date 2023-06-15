import React from 'react';
import "../styles/InputOptions.css";

function InputOptions(props) {
  return (
    <div className='inputOption'>
        <props.Icon style = {{color: props.color}} />
        <h4>{props.title}</h4>
    </div>
  )
}

export default InputOptions
