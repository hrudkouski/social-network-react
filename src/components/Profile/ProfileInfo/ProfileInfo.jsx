import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    alt='img content'
                    src='https://st.depositphotos.com/1038117/2709/i/450/depositphotos_27098687-stock-photo-caribbean-sea-and-wooden-platform.jpg'/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;