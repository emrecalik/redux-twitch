import {SIGN_IN, SIGN_OUT} from "../actions/types";

const initialState = {
    isSignedIn: false,
    userId: null
}

export const authAction = (state = initialState, action) => {
    switch (action.type){
        case SIGN_IN:
            return { isSignedIn: true, userId: action.payload }
        case SIGN_OUT:
            return { isSignedIn: false, userId: null };
        default:
            return state;
    }
}
