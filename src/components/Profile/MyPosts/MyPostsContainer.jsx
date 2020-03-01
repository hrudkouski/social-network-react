import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducer-profile";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };

                    return <MyPosts newPostText={state.profilePage.newPostText}
                                    posts={state.profilePage.posts}
                                    updateNewPostText={onPostChange}
                                    addPost={addPost}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;