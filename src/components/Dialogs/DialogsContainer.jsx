import React from 'react';
import {addMessageActionCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        messagesPage: state.messagesPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect
    )(Dialogs);