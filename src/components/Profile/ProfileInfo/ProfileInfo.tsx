import React, { FC } from "react";
import style from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";

type ProfileInfoType = {
  profile: any;
};
export const ProfileInfo: FC<ProfileInfoType> = (props) => {
  if (!props.profile) {
    return <span>preloader</span>;
  } else {
    let url = props.profile.photos.large
      ? props.profile.photos.large
      : "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg";
    return (
      <div className={style.info}>
        <img width="100" height="100" src={url} alt="avatar" />
        <div>
          <ProfileStatus />
          <p>{props.profile.fullName}</p>
          <p>{props.profile.aboutMe}</p>
        </div>
      </div>
    );
  }
};
