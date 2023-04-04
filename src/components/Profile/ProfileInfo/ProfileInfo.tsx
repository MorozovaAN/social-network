import React, { FC } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import defaultUserAvatar from "../../../images/defaultUserAvatar.svg";
import { ProfileType } from "../../../redux/reducers/profile-reducer";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { UserInfoType } from "../../../api/api";

type ProfileInfoType = {
  profile: ProfileType;
  status: string;
  updateUserStatus: (title: string) => void;
  authorizedUserId: number;
  updateUserPhoto: (file: File) => void;
  updateUserInfo: (info: UserInfoType) => void;
};

export const ProfileInfo: FC<ProfileInfoType> = ({
  profile,
  status,
  updateUserStatus,
  authorizedUserId,
  updateUserPhoto,
  updateUserInfo,
}) => {
  const addFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      updateUserPhoto(e.target.files[0]);
    }
  };

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

              {authorizedUserId === profile.userId && (
                <>
                  <input
                    type="file"
                    id="inputFile"
                    onChange={addFileHandler}
                    className={s.inputUpdatePhoto}
                  />
                  <label htmlFor="inputFile" className={s.labelUpdatePhoto}>
                    <AddAPhotoIcon
                      fontSize="small"
                      className={s.iconUpdatePhoto}
                    />
                  </label>
                </>
              )}
            </div>

            <div className={s.userTextsInfo}>
              <p className={s.name}>{profile.fullName}</p>
              <ProfileStatus
                status={status}
                updateUserStatus={updateUserStatus}
                myProfile={authorizedUserId === profile.userId}
              />
              <p>
                <b>Stack: </b>
                {profile.lookingForAJobDescription}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
