import React, { FC } from "react";
import style from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ActionsTypes, ProfilePageType } from "../../redax/state";

type ProfileType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionsTypes) => void;
};

export const Profile: FC<ProfileType> = ({ profilePage, dispatch }) => {
  return (
    <div>
      <img
        alt="bg-image"
        className={style.img}
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/horizontal-vivid-varitone-ocean-sunset-horizon-blur-abstraction-nickolay-loginov.jpg"
      />
      <ProfileInfo />
      <MyPosts
        posts={profilePage.posts}
        newPostText={profilePage.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};
