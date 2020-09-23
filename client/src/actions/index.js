import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    SIGN_IN,
    SIGN_OUT,
    OPEN_MODAL,
    CLOSE_MODAL
} from "./types";
import {StreamApi} from "../api/StreamApi";
import history from "../history";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}

export const fetchStreams = () => async (dispatch) => {
    const response = await StreamApi().get("/streams")
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

export const createStream = (body) => async (dispatch) => {
    const response = await StreamApi().post("/streams", {
        title: body.title,
        description: body.description,
        userId: body.userId
    })
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
    history.push("/");
}

export const fetchStream = (id) => async (dispatch) => {
    const response = await StreamApi().get(`/streams/${id}`)
    dispatch ({
        type: FETCH_STREAM,
        payload: response.data
    })
}

export const editStream = (body) => async (dispatch) => {
    const response = await StreamApi().put(`/streams/${body.id}`, {
        title: body.title,
        description: body.description,
        userId: body.userId
    })
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    history.push("/");
}

export const deleteStream = (id) => async (dispatch, getState) => {
    await StreamApi().delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
    history.push("/")
}

export const openModal = () => async (dispatch) => {
    dispatch({
        type: OPEN_MODAL,
    })
}

export const closeModal = () => async (dispatch) => {
    dispatch({
        type: CLOSE_MODAL
    })
}