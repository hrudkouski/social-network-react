import React from "react";
import s from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, fullName: 'Mikita',
                    photoURL: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                    followed: false,
                    status: 'Hello! I am jsDeveloper',
                    location:
                        {city: "Minsk", country: 'Belarus'}
                },
                {
                    id: 2, fullName: 'Masha',
                    photoURL: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                    followed: true,
                    status: 'Hello! I am manager',
                    location:
                        {city: "Warszawa", country: 'Poland'}
                },
                {
                    id: 3, fullName: 'Alex',
                    photoURL: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
                    followed: false,
                    status: 'Hello! I am student',
                    location:
                        {city: "Kiev", country: 'Ukraine'}
                }
            ]
        );
    }

    return <div>
        {
            props.users.map(u => <div key={u.id} className={s.container}>
                <span>
                    <div>
                        <img alt='avatar' src={u.photoURL} className={s.photoAvatar}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;

