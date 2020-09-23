import { combineReducers } from "redux";
import { authAction } from "./authReducer";
import { streamsReducer } from "./streamReducer";
import { reducer as formReducer } from "redux-form";
import {modalReducer} from "./modalReducer";

export const rootReducer = combineReducers(
    {
        user: authAction,
        streams: streamsReducer,
        form: formReducer,
        modal: modalReducer
    }
)