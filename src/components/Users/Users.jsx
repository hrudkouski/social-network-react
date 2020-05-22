import React from "react";
import s from './Users.module.css';
import avatar from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";

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
    </div>
};

export default Users;

