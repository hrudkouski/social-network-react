import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    // if (props.profile.lookingForAJob === false){
    //     return <span>1</span>
    // }

    return (
        <div className={s.profileInfo}>
            {/*<div>*/}
            {/*    <img*/}
            {/*        alt='img content'*/}
            {/*        src='https://iycoalition.org/wp-content/uploads/social-media-mobile-icons-snapchat-facebook-instagram-ss-800x450-3-800x450.jpg'/>*/}
            {/*</div>*/}
            <div className={s.description}>
                <img alt={''} src={props.profile.photos.large}/>
                <div>Full Name: {props.profile.fullName}</div>
                <div className={s.aboutMe}>About Me: {props.profile.aboutMe}</div>
                <div>Looking For A Job Description: {props.profile.lookingForAJobDescription}</div>
                <div>Contacts:
                    <nav>{props.profile.contacts.twitter}</nav>
                    <div>{props.profile.contacts.instagram}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;