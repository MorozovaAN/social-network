import React from "react";
import style from "./Post.module.css";

type PostType = {
  message: string;
  likesCount: number;
};

export const Post: React.FC<PostType> = (props) => {
  return (
    <div className={style.post}>
      <img
        className={style.avatar}
        src="https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"
        alt="avatar"
      />
      <p>{props.message}</p>
      <span>likes: {props.likesCount}</span>
    </div>
  );
};
