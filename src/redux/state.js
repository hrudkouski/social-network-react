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
        messagesPage: {
            messages: [
                {id: 1, message: ''}
            ],
            dialogs: [
                {id: 1, name: 'Nikita'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Sasha'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 'Like - 112'
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};


// export const addMessage = () => {
//     let newMessage = {
//         id: 3,
//         message: state.messagesPage.newMessageText
//     };
//     state.messagesPage.messages.push(newMessage);
//     state.profilePage.newMessageText = '';
//     rerenderEntireTree(state);
// };

// export const updateNewMessageText = (newText) => {
//     state.messagesPage.newMessageText = newText;
//     rerenderEntireTree(state);
// };

export default store;
window.store = store;