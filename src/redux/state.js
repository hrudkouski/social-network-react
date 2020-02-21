import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi? how are you?', likesCount: 'Like - 327'},
            {id: 2, message: 'Hello! It is my first project!', likesCount: 'Like - 125'},
            {id: 3, message: 'Hello!', likesCount: 'Like - 25'}
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'My first message!'},
            {id: 2, message: 'My second message'},
            {id: 3, message: 'My third message'}
        ],
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Petr'},
            {id: 5, name: 'Marat'},
            {id: 6, name: 'Pavel'},
            {id: 7, name: 'Mark'}
        ]
    },
    sidebar: {}
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 'Like - 112'
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;