import React from 'react'
import "../styles/HeaderOptions.css";
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOptions(props) {

  const user = useSelector(selectUser)


  return (
    <div onClick={props.logout} className='headerOptions'>
      {/* {props.Icon && <props.Icon className = 'headerOption__icon'/>}
       */}
      {props.Icon 
       ?<props.Icon className='headerOption__icon' /> 
       : <Avatar alt="Me" className='headerOption__icon' src={user?.photoURL}>{user?.displayName[0]}
       </Avatar>}
      <h4 className='headerOptions__title'>{props.title}</h4>

    </div>
  )
}

export default HeaderOptions
