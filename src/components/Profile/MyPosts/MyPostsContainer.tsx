import React from "react";
import { addPostAC, PostType } from "../../../redux/reducers/profile-reducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/store";
import { Dispatch } from "redux";

type mapStateToPropsType = {
  posts: PostType[];
};
type mapDispatchToPropsType = {
  addPost: (newPostBody: string) => void;
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
  };
};
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: (newPostBody) => {
      dispatch(addPostAC(newPostBody));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
