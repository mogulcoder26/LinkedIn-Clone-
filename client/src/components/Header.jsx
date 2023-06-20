import React from 'react';
import { AppBar, Menu, Toolbar } from '@mui/material';
import "../styles/Header.css";
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { gmailLogo } from "../constants/constant.js";


function Header() {
  return (
    <AppBar className='appbar' >
      <Toolbar >

        {/* <MenuIcon /> */}
        <WidgetsRoundedIcon />
        <img className='logo' src={gmailLogo} alt="logo" />
      </Toolbar>
    </AppBar>
  )
}

export default Header
