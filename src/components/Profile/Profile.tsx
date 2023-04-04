import React, { FC } from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import { ProfileType } from "../../redux/reducers/profile-reducer";
import { UserInfoType } from "../../api/api";

type ProfilePropsType = {
  profile: ProfileType;
  authorizedUserId: number;
  status: string;
  updateUserStatus: (title: string) => void;
  updateUserPhoto: (file: File) => void;
  updateUserInfo: (info: UserInfoType) => void;
};

export const Profile: FC<ProfilePropsType> = ({
  profile,
  status,
  updateUserStatus,
  authorizedUserId,
  updateUserPhoto,
  updateUserInfo,
}) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        authorizedUserId={authorizedUserId}
        updateUserPhoto={updateUserPhoto}
        updateUserInfo={updateUserInfo}
      />
      {authorizedUserId === profile?.userId && (
        <MyPostsContainer
          profile={profile}
          authorizedUserId={authorizedUserId}
        />
      )}
    </div>
  );
};
