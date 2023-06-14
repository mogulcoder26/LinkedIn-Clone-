import React from "react";
import "./HeaderOptions.css";


export function HeaderOptions(props){

return (
            <div className="header__Options">
                {<props.Icon className = "headerOptions__icon" />}
                <h3>{props.title}</h3>
            </div>
    )
}