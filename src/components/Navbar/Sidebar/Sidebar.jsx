import React from 'react';
import s from './../Navbar.module.css';
import SideItems from "./SideItems/SideItems";


const Sidebar = (props) => {

            let sideElement = props.items.map( p => <SideItems name={p.name}/>);

            return <div className={s.sideItems}>
                <h3>Friends</h3>
                {sideElement}
            </div>
};

export default Sidebar;