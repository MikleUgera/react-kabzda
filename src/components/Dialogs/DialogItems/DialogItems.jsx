import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialogs + ' ' + s.active}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt=""/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>

};

export default DialogItems;