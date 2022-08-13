import React, { FC } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { StoreContext } from "../../../storeContext";
import { storeType } from "../../../redux/state";

type MyPostsContainerType = {};

export const MyPostsContainer: FC<MyPostsContainerType> = () => {
  return (
    <StoreContext.Consumer>
      {(store: storeType) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const updateNewPostText = (newText: string) => {
          store.dispatch(updateNewPostTextActionCreator(newText));
        };
        return (
          <MyPosts
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
