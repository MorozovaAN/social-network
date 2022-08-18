import React, { FC } from "react";
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/profile-reducer";

type MyPostsType = {
  posts: Array<PostType>;
  newPostText: string;
  updateNewPostText: (newText: string) => void;
  addPost: () => void;
};

export const MyPosts: FC<MyPostsType> = ({
  posts,
  newPostText,
  updateNewPostText,
  addPost,
}) => {
  let postsItem = posts.map((p) => (
    <Post key={p.id} message={p.text} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const onPostChange = () => {
    if (newPostElement.current) {
      updateNewPostText(newPostElement.current.value);
    }
  };

  const onAddPost = () => addPost();

  return (
    <div>
      {postsItem}
      <textarea
        ref={newPostElement}
        value={newPostText}
        onChange={onPostChange}
      ></textarea>
      <div>
        <button onClick={onAddPost}>Send post</button>
        <button>Remove post</button>
      </div>
    </div>
  );
};
