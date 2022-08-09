import React, { FC } from "react";
import { Post } from "./Post/Post";
import {
  ActionsTypes,
  addPostActionCreator,
  PostType,
  updateNewPostTextActionCreator,
} from "../../../redax/state";

type MyPostsType = {
  posts: Array<PostType>;
  newPostText: string;
  dispatch: (action: ActionsTypes) => void;
};

export const MyPosts: FC<MyPostsType> = ({ posts, newPostText, dispatch }) => {
  let postsItem = posts.map((p) => (
    <Post key={p.id} message={p.text} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    dispatch(addPostActionCreator());
  };
  const onPostChange = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      dispatch(updateNewPostTextActionCreator(text));
    }
  };
  return (
    <div>
      {postsItem}
      <textarea
        ref={newPostElement}
        value={newPostText}
        onChange={onPostChange}
      ></textarea>
      <div>
        <button onClick={addPost}>Send post</button>
        <button>Remove post</button>
      </div>
    </div>
  );
};
