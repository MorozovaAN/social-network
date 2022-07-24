import React from "react";
import style from "./Profile.module.css";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div>
      <img
        alt="bg-image"
        className={style.img}
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/horizontal-vivid-varitone-ocean-sunset-horizon-blur-abstraction-nickolay-loginov.jpg"
      />
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};
