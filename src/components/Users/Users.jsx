import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import avatar from "../../assets/images/avatar.png";

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return <div className={s.wrapper}>
            {
                this.props.users.map(u => <div key={u.id} className={s.container}>
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
                                    this.props.unFollow(u.id)
                                }}>unFollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default Users;

