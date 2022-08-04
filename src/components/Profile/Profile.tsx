import React, { FC } from "react";
import style from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { profilePageType } from "../../redax/state";

type ProfileType = {
  profilePage: profilePageType;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
};

export const Profile: FC<ProfileType> = (props) => {
  return (
    <div>
      <img
        alt="bg-image"
        className={style.img}
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/horizontal-vivid-varitone-ocean-sunset-horizon-blur-abstraction-nickolay-loginov.jpg"
      />
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};
