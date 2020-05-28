import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/reducer-auth";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
        // authAPI.authMeApi()
        //     .then(data => {
        //     if (data.resultCode === 0) {
        //         let {id, login, email} = data.data;
        //         this.props.setAuthUserData(id, login, email)
        //     }
        // });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default HeaderContainer = connect(mapStateToProps, {getAuthUserData})(HeaderContainer);