const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

let initialState = {
    messages: [
        {id: 1, message: ''}
    ],
    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Sasha'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            let newMessage = {
                id: 3,
                message: body
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        default:
            return state;
    }
};

export default dialogsReducer;