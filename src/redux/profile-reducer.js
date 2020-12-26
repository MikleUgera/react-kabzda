import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts:[
        {id: 1, name: 'Hi, how are you', count: 12},
        {id: 2, name: 'It is my first react', count: 10},
        {id: 3, name: 'hello', count: 100},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                name: action.newPost,
                count: 0
            };
            return {...state,
                posts: [...state.posts, newPost]
            };
        case SET_STATUS:
            return {...state,
                status: action.status
            };

        case SET_USER_PROFILE:
            return {...state,
                profile: action.profile
            };
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getProfileThunk = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
};

export const getStatusThunk = (userId) => async (dispatch) => {
    let response =  await ProfileAPI.getStatus(userId);

    dispatch(setStatus(response.data));

};

export const updateStatusThunk = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

};

export default profileReducer;