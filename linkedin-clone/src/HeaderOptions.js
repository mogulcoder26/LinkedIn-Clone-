import React from "react";
import "./HeaderOptions.css";


export function HeaderOptions(props){

return (
            <div className="header__Options">
                {(props.Icon)?<props.Icon className = "headerOptions__icon" />:<img src= {props.Avatar} className= 'headerOptions__avatar'/>}
                <h3>{props.title}</h3>
            </div>
    )
}