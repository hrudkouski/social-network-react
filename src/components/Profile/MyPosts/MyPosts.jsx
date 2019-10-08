import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            my posts
            <div>
                <textarea>Write something</textarea>
                <button>Add post</button>
                <button>Post remove</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi? how are you?' counter='&#10084; - 327'/>
                <Post message='Hello! It is my first project' counter='&#10084; - 125'/>
            </div>
        </div>
    );
};

export default MyPosts;