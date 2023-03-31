import React, { FC } from "react";
import s from "./ProfileInfo.module.css";
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
      <>
        <div className={s.background}></div>
        <div className={s.info}>
          <div className={s.avatarContainer}>
            <img src={url} alt="avatar" className={s.avatar} />
          </div>

          <div className={s.userTextsInfo}>
            <p className={s.name}>{profile.fullName}</p>
            <ProfileStatus
              status={status}
              updateUserStatus={updateUserStatus}
            />
          </div>
        </div>
      </>
    );
  }
};
