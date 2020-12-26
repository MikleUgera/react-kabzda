import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {getLogThunk, postLoginThunk} from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component{

    render() {
        return (
            <Login {...this.props} post={this.props.postLoginThunk}/>
        )
    }
};

let mapStatetoProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStatetoProps, {getLogThunk, postLoginThunk}))(LoginContainer);