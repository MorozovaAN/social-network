import React, { FC } from "react";
import { Post } from "./Post/Post";
import { PostType } from "../../../redux/reducers/profile-reducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

type MyPostsType = {
  posts: Array<PostType>;
  addPost: (newPostBody: string) => void;
};

export const MyPosts: FC<MyPostsType> = ({ posts, addPost }) => {
  let postsItem = posts.map((p) => (
    <Post key={p.id} message={p.text} likesCount={p.likesCount} />
  ));

  const addNewPost = (formData: FormDataType) => {
    addPost(formData.newPostBody);
  };

  return (
    <div>
      {postsItem}
      <AddNewPostReduxForm onSubmit={addNewPost} />
    </div>
  );
};

export const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component="textarea"
        name="newPostBody"
        placeholder="Enter your message"
      />

      <div>
        <button>Send post</button>
      </div>
    </form>
  );
};

type FormDataType = {
  newPostBody: string;
};
export const AddNewPostReduxForm = reduxForm<FormDataType>({
  form: "profileAddNewPost",
})(AddNewPostForm);
