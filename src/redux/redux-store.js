import {combineReducers, createStore} from "redux";
import profileReducer from "./reducer-profile";
import dialogsReducer from "./reducer-dialogs";
import usersReducer from "./reducer-users";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer
    }
);

let store = createStore(reducers);

window.store = store;

export default store;