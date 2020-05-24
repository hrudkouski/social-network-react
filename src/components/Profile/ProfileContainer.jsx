import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducer-profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

export default ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithRouterContainerComponent);