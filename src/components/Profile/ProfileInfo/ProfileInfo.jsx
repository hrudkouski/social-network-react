import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    alt='img content'
                    src='https://iycoalition.org/wp-content/uploads/social-media-mobile-icons-snapchat-facebook-instagram-ss-800x450-3-800x450.jpg'/>
        </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;