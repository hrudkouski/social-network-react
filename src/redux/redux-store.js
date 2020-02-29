import {combineReducers, createStore} from "redux";
import profileReducer from "./reducer-profile";
import dialogsReducer from "./reducer-dialogs";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer
    }
);

let store = createStore(reducers);

export default store;