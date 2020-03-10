const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
    posts: [
        {id: 1, message: 'Hi? how are you?', likesCount: 'Like - 327'},
        {id: 2, message: 'Hello! It is my first project!', likesCount: 'Like - 125'},
        {id: 3, message: 'Hello!', likesCount: 'Like - 25'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 'Like - 112'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        default:
            return state;
    }
};

export default profileReducer;