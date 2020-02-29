import profileReducer from "./reducer-profile";
import dialogsReducer from "./reducer-dialogs";
// import sidebarReducer from "./reducer-sidebar";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi? how are you?', likesCount: 'Like - 327'},
                {id: 2, message: 'Hello! It is my first project!', likesCount: 'Like - 125'},
                {id: 3, message: 'Hello!', likesCount: 'Like - 25'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: ''}
            ],
            dialogs: [
                {id: 1, name: 'Nikita'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Sasha'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;