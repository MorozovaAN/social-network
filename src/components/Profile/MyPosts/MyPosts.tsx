import React, { FC } from "react";
import { Post } from "./Post/Post";
import { PostType, ProfileType } from "../../../redux/reducers/profile-reducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../helpers/validators";
import { ElementControl } from "../../common/FormsControls/TextareaControl/ElementControl";
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

  const addNewPost = (formData: FormDataType) => {
    addPost(formData.newPostBody);
  };

  return (
    <div className={s.postsContainer}>
      {postsItem}
      <AddNewPostReduxForm onSubmit={addNewPost} />
    </div>
  );
};
const maxLength50 = maxLengthCreator(50);
export const AddNewPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={ElementControl}
        element="textarea"
        name="newPostBody"
        validate={[requiredField, maxLength50]}
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
