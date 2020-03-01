import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducer-dialogs";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        let action = sendMessageCreator();
                        store.dispatch(action);
                    };

                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    };

                    return <Dialogs dialogsPage={state}
                                    updateNewMessageBody={onNewMessageChange}
                                    sendMessage={onSendMessageClick}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
