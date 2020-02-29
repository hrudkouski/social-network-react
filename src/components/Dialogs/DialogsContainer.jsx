import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducer-dialogs";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        let action = sendMessageCreator();
        props.store.dispatch(action);
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <Dialogs dialogsPage={state}
                 updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}/>
    );
};

export default DialogsContainer;