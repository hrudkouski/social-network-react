import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import avatar from "../../assets/images/avatar.png";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++)
            pages.push(i);

        return <div className={s.wrapper}>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span onClick={() => this.onPageChanged(p)}
                                 className={this.props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>
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

