import React, { FC, useState } from "react";
import { Post } from "./Post/Post";
import TextField from "@mui/material/TextField";
import { PostType, ProfileType } from "../../../redux/reducers/profile-reducer";
import s from "./MyPosts.module.css";
import Button from "@mui/material/Button";

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
  const [value, setValue] = useState("");
  const sendPostHandler = () => {
    addPost(value);
    setValue("");
  };

  const cleanPostHandler = () => {
    setValue("");
  };

  const textareaOnChange = (e: any) => {
    setValue(e.target.value);
  };

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
    <div className={s.MyPosts}>
      <div className={s.postsContainer}>{postsItem}</div>

      <TextField
        label="Write new Post"
        multiline
        rows={3}
        value={value}
        onChange={textareaOnChange}
        color="secondary"
        classes={{ root: s.textarea }}
      />

      <div className={s.buttonsContainer}>
        <Button
          onClick={sendPostHandler}
          variant="contained"
          color="secondary"
          classes={{ root: s.button }}
          disabled={!value}
        >
          Send post
        </Button>

        <Button
          onClick={cleanPostHandler}
          variant="outlined"
          color="secondary"
          classes={{ root: s.button }}
          disabled={!value}
        >
          Reset post
        </Button>
      </div>
    </div>
  );
};
