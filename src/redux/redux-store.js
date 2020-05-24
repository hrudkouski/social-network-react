import {combineReducers, createStore} from "redux";
import profileReducer from "./reducer-profile";
import dialogsReducer from "./reducer-dialogs";
import usersReducer from "./reducer-users";
import authReducer from "./reducer-auth";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
);

let store = createStore(reducers);

window.store = store; //чтоб с консоли можно к стору достучаться

export default store;