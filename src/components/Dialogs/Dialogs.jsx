import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Nikita
                </div>
                <div className={s.dialog}>
                    Masha
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Petr
                </div>
                <div className={s.dialog}>
                    Marat
                </div>
                <div className={s.dialog}>
                    Pavel
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    My first message
                </div>
                <div className={s.message}>
                    My second message
                </div>
                <div className={s.message}>
                    My third message
                </div>
            </div>
        </div>
    );
};

export default Dialogs;