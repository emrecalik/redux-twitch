import {CLOSE_MODAL, OPEN_MODAL} from "../actions/types";

const initialState = {
    open: false,
    dimmer: undefined
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { open: true, dimmer: action.dimmer};
        case CLOSE_MODAL:
            return { open: false };
        default:
            return state;
    }
}