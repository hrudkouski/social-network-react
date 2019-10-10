import React from 'react';
// import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    alt='img content'
                    src='https://st.depositphotos.com/1038117/2709/i/450/depositphotos_27098687-stock-photo-caribbean-sea-and-wooden-platform.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;