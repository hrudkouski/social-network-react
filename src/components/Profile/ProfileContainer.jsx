import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/reducer-profile";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8392;
        }
        this.props.getProfile(userId);
    };

    render() {

        if (!this.props.isAuth) return <Redirect to='/login'/>;

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};

let WithRouterContainerComponent = withRouter(ProfileContainer);

export default ProfileContainer = connect(mapStateToProps, {getProfile})(WithRouterContainerComponent);