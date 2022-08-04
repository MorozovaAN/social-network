import React, { FC } from "react";
import { Post } from "./Post/Post";
import { postType } from "../../../redax/state";

type MyPostsType = {
  posts: Array<postType>;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
  newPostText: string;
};

export const MyPosts: FC<MyPostsType> = (props) => {
  let postsItem = props.posts.map((p) => (
    <Post key={p.id} message={p.text} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    props.addPost();
  };
  const onPostChange = () => {
    if (newPostElement.current) {
      props.updateNewPostText(newPostElement.current.value);
    }
  };
  return (
    <div>
      {postsItem}
      <textarea
        ref={newPostElement}
        value={props.newPostText}
        onChange={onPostChange}
      ></textarea>
      <div>
        <button onClick={addPost}>Send post</button>
        <button>Remove post</button>
      </div>
    </div>
  );
};
