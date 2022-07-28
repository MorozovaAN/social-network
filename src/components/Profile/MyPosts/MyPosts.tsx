import React, { FC } from "react";
import { Post } from "./Post/Post";
import { postType } from "../../../redax/state";

type MyPostsType = {
  posts: Array<postType>;
};

export const MyPosts: FC<MyPostsType> = (props) => {
  let postsItem = props.posts.map((p) => (
    <Post key={p.id} message={p.text} likesCount={p.likesCount} />
  ));

  return (
    <div>
      {postsItem}
      <textarea></textarea>
      <div>
        <button>Send post</button>
        <button>Remove post</button>
      </div>
    </div>
  );
};
