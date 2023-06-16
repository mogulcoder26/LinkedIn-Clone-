import React from 'react'
import "../styles/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from "./HeaderOptions.js"
import HomeIcon from '@mui/icons-material/Home';
// import SupervisorAccountIcon from '@mui/icons-material/';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon  from '@mui/icons-material/BusinessCenter'
import ChatIcon  from '@mui/icons-material/Chat'
import NotificationIcon  from '@mui/icons-material/Notifications'
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {auth } from "../firebase"


function Header() {

    const user = useSelector(selectUser)

    const dispatch  = useDispatch()

    const logoutOfApp = ()=>{
        dispatch(logout())
        auth.signOut();
    }


    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://logoeps.com/wp-content/uploads/2014/04/36620-linkedin-logo-icon-vector-icon-vector-eps.png" alt="LinkedIn__LOGO" />
            
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="" id="" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions title='Home' Icon ={HomeIcon}/>
                <HeaderOptions title='My Network' Icon = {SupervisorAccountIcon}/>
                <HeaderOptions title='Jobs' Icon = {BusinessCenterIcon} />
                <HeaderOptions  title='Messaging' Icon = {ChatIcon} />
                <HeaderOptions title='Notifications' Icon = {NotificationIcon} />
                <HeaderOptions logout={logoutOfApp} title='Me' />
            </div>
        </div>
    )
}

export default Header
