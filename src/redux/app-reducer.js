import {getLogThunk} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const InitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializedApp = () => (dispatch) => {
    let promise =  dispatch(getLogThunk());
    Promise.all([promise]).then(() => {
        dispatch(InitializedSuccess());
    });
};

export default appReducer;