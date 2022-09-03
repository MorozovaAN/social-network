import React, { FC } from "react";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

type ProfileType = {
  profile: any;
};

export const Profile: FC<ProfileType> = ({ profile }) => {
  return (
    <div>
      <img
        alt=""
        className={style.img}
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/horizontal-vivid-varitone-ocean-sunset-horizon-blur-abstraction-nickolay-loginov.jpg"
      />
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  );
};
