import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            let userId = this.props.authorizedUserId;
        }

        this.props.getProfileThunk(userId);
        this.props.getStatusThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} update={this.props.updateStatusThunk}/>
        )
    }
};

let mapStatetoProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStatetoProps, {getProfileThunk, getStatusThunk, updateStatusThunk}),
    withRouter,
    AuthRedirect
    )(ProfileContainer);