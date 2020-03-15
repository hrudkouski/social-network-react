import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import avatar from "../../assets/images/avatar.png";

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    };
    debugger
    return <div className={s.wrapper}>
        {
            props.users.map(u => <div key={u.id} className={s.container}>
                <span>
                    <div>
                        <img alt='avatar'
                             src={u.photos.small != null ? u.photos.small : avatar}
                             className={s.photoAvatar}/>
                    </div>
                    <div>
                        {
                            u.followed === true
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>unFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                        }
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)
        }
        <button onClick={getUsers}>Get Users</button>
    </div>

};

export default Users;

