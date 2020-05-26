import React from "react";
import s from './Users.module.css';
import avatar from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    return <div className={s.wrapper}>
        <div className={s.pages}>
            {pages.map(p => {
                return <span onClick={() => props.onPageChanged(p)}
                             className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.container}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img alt='avatar'
                             src={u.photos.small != null ? u.photos.small : avatar}
                             className={s.photoAvatar}/>
                        </NavLink>
                    </div>

                    <div className={s.userItem}>
                        {u.followed
                            ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "3af7a44d-0a6b-4bf7-b34b-b5730fa5756f"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id);
                                        }
                                        props.toggleIsFollowingProgress(false, u.id);
                                    });
                            }}>unFollow</button>

                            : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "3af7a44d-0a6b-4bf7-b34b-b5730fa5756f"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleIsFollowingProgress(false, u.id);
                                    });
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
    </div>
};

export default Users;

