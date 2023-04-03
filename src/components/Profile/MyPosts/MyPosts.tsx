import React, { FC } from "react";
import { Post } from "./Post/Post";
import { PostType, ProfileType } from "../../../redux/reducers/profile-reducer";
import s from "./MyPosts.module.css";

type MyPostsType = {
  posts: Array<PostType>;
  addPost: (newPostBody: string) => void;

  profile: ProfileType;

  authorizedUserId: number | null;
};

export const MyPosts: FC<MyPostsType> = ({
  posts,
  addPost,
  profile,
  authorizedUserId,
}) => {
  const postsItem = posts.map((p) => (
    <Post
      key={p.id}
      message={p.text}
      likesCount={p.likesCount}
      profile={profile}
      authorizedUserId={authorizedUserId}
    />
  ));

  return (
    <div className={s.postsContainer}>
      {postsItem}
      <textarea></textarea>
    </div>
  );
};
