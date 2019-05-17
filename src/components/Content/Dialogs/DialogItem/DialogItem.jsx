import React from 'react';
import './../Dialogs.scss';
import NavLink from "react-router-dom/es/NavLink";

const DialogItem = (props) => {
    return(
        <NavLink to={"/dialogs/"+props.id} activeClassName="myItemActive">
            <div className="item">
                {props.name}
            </div>
        </NavLink>
    )
};

export default (DialogItem);
