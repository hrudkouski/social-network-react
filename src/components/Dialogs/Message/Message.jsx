import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message);
        newMessageElement.current.value = '';
    };

    return (<div>
            <div className={s.dialog}>{props.message}</div>
            <div>
                <div>
                    <textarea ref={newMessageElement}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Message;