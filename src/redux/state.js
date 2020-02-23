let rerenderEntireTree = () => {
    console.log('State changed');
};

let state = {
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
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 'Like - 112'
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 3,
        message: state.messagesPage.newMessageText
    };
    state.messagesPage.messages.push(newMessage);
    state.profilePage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
};

export default state;