import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };

    return (<div>
            <div className={s.dialog}>{props.message}</div>
            <div>
                <div>
                    <textarea ref={newMessageElement}
                              value={props.newMessageText}
                              onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Message;