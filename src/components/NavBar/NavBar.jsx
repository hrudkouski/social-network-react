import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href='https://www.google.by/'>Profile</a>
            </div>
            <div className={s.item}>
                <a href='https://www.google.by/'>Messages</a>
            </div>
            <div className={s.item}>
                <a href='https://www.google.by/'>News</a>
            </div>
            <div className={s.item}>
                <a href='https://www.google.by/'>Music</a>
            </div>
            <div className={s.item}>
                <a href='https://www.google.by/'>Settings</a>
            </div>
        </nav>
    );
};

export default NavBar;