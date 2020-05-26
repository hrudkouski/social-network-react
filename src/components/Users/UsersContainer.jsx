import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unFollow
} from "../../redux/reducer-users";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users pageSize={this.props.pageSize}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followingProgress={this.props.followingProgress}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   totalUsersCount={this.props.totalUsersCount}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
};

export default UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress
})(UsersContainer);