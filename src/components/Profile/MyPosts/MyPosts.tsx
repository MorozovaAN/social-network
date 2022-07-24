import React from "react";
import style from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      <Post message="Hi, how are you" />
      <Post message="It's my friends" />
      <textarea></textarea>
      <div>
        <button>Send post</button>
        <button>Remove post</button>
      </div>
    </div>
  );
};
