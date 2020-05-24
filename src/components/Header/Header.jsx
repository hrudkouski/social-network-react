import React from 'react';
import s from './Header.module.css';
import logo from "../../assets/images/logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<div className={s.header}>
            <header>
                <img alt='logo company'
                     src={logo}/>
                <div className={s.login}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Sign Up</NavLink>}
                </div>
            </header>
        </div>
    );
};

export default Header;