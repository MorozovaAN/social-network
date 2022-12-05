import React, { FC } from "react";
import style from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";

type ProfileInfoType = {
  profile: any;
  status: string;
  updateUserStatus: any;
};
export const ProfileInfo: FC<ProfileInfoType> = ({
  profile,
  status,
  updateUserStatus,
}) => {
  if (!profile) {
    return <span>preloader</span>;
  } else {
    let url = profile.photos.large
      ? profile.photos.large
      : "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg";
    return (
      <div className={style.info}>
        <img width="100" height="100" src={url} alt="avatar" />
        <div>
          <p>{profile.fullName}</p>
          <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
          <i>About me:</i>
          <p>{profile.aboutMe}</p>
        </div>
      </div>
    );
  }
};
