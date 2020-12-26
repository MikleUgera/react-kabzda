import {createSelector} from "reselect";

const getUser = (state) => {
    return state.usersPage.users;
};

export const getUsers = createSelector(getUser, (users) => {
    return users;
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getPagesCount = createSelector(getTotalUsersCount, getPageSize, (totalUsersCount, pageSize) => {
    let Count = Math.ceil(totalUsersCount / pageSize);
    return Count;
});

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};

export const getIsAuth = (state) => {
    return state.auth.isAuth;
};