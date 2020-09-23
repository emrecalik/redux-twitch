import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import App from "./components/App";

const store = createStore(rootReducer, undefined, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
)