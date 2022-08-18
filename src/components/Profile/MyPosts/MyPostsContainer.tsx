import React from "react";
import {
  addPostActionCreator,
  PostType,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { Dispatch } from "redux";

type mapStateToPropsType = {
  posts: PostType[];
  newPostText: string;
};
type mapDispatchToPropsType = {
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (newText: string) => {
      dispatch(updateNewPostTextActionCreator(newText));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
