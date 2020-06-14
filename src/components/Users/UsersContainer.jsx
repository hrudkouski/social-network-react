import {connect} from "react-redux";
import {
    follow, unFollow, getUsers,
    followSuccess, unFollowSuccess,
    toggleIsFollowingProgress, setCurrentPage
} from "../../redux/reducer-users";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {

        return <div>
            {this.props.isFetching ? <Preloader/> : null}
            <Users pageSize={this.props.pageSize}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followingProgress={this.props.followingProgress}
                   totalUsersCount={this.props.totalUsersCount}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {
        followSuccess, unFollowSuccess, setCurrentPage,
        toggleIsFollowingProgress, getUsers, follow, unFollow
    }),
    withAuthRedirect
)(UsersContainer);