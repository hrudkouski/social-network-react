import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
                <div className={s.item}>
                    <img alt='avatar'
                         src='https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'/><br/>
                    Hi, Bro! My name is Nikita!
                    <div>
                        <span>like</span>
                    </div>
                </div>
    );
};

export default Post;