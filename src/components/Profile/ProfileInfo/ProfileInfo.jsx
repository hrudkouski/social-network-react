import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.description}>
                <ProfileStatus status={'Hello? my friends!'}/>
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