import React, { FC } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import defaultUserAvatar from "../../../images/defaultUserAvatar.svg";

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
  return (
    <>
      {profile && (
        <>
          <div className={s.background}></div>
          <div className={s.info}>
            <div className={s.avatarContainer}>
              <img
                src={
                  profile.photos.large
                    ? profile.photos.large
                    : defaultUserAvatar
                }
                alt="avatar"
                className={s.avatar}
              />
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
      )}
    </>
  );
};
