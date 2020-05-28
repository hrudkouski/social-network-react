import {connect} from "react-redux";
import {
    follow, unFollow, getUsers,
    followSuccess, unFollowSuccess,
    toggleIsFollowingProgress, setCurrentPage
} from "../../redux/reducer-users";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);   ?!!??!?!?!
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // });
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
    followSuccess, unFollowSuccess, setCurrentPage,
    toggleIsFollowingProgress, getUsers, follow, unFollow
})(UsersContainer);