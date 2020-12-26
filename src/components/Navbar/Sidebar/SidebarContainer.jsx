import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        items: state.sidebar.items
    }
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;