import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/reducer-profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
        // usersAPI.getProfileApi(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
        //     });
    };

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithRouterContainerComponent = withRouter(ProfileContainer);

export default ProfileContainer = connect(mapStateToProps, {getProfile})(WithRouterContainerComponent);