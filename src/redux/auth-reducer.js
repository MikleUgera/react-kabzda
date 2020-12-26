import {AuthAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    useId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const getLogThunk = () => async (dispatch) => {
    let response = await AuthAPI.me();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const postLoginThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getLogThunk());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        let action = stopSubmit("login", {_error: message});
        dispatch(action);
    }
};

export const LogoutThunk = () => async (dispatch) => {
    let response = await AuthAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};
export default authReducer;