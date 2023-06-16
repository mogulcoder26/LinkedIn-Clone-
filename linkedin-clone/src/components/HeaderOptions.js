import React from 'react'
import "../styles/HeaderOptions.css";
import Avatar from '@mui/material/Avatar';

function HeaderOptions(props) {
  return (
    <div onClick={props.logout} className='headerOptions'>
      {/* {props.Icon && <props.Icon className = 'headerOption__icon'/>}
       */}
       {props.Icon ? <props.Icon className='headerOption__icon' /> :<Avatar alt="Me" className='headerOption__icon' src={props.avatar} />}
      <h4 className='headerOptions__title'>{props.title}</h4>
    
    </div>
  )
}

export default HeaderOptions
