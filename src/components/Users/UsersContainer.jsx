import React from 'react';
import {connect} from 'react-redux';
import {follow, getUsersThunk, unfollow} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching, getPagesCount,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component{

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunk(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsersThunk(pageNumber, pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users pagesCount={this.props.pagesCount}
                          currentPage = {this.props.currentPage}
                          onPageChanged = {this.onPageChanged}
                          users = {this.props.users}
                          follow = {this.props.follow}
                          unfollow = {this.props.unfollow}
                          followingInProgress = {this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pagesCount: getPagesCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
};

export default compose(
    AuthRedirect,
    connect(mapStateToProps,{follow, unfollow, getUsersThunk})
    )(UsersContainer);
