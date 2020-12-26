import React from 'react';
import s from './../../Navbar.module.css'

const SideItems = (props) => {
    return <div className={s.sideItems}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Auto_Racing_Green.svg/800px-Auto_Racing_Green.svg.png" alt=""/>
        {props.name}
    </div>
};

export default SideItems;