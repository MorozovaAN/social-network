import React, { FC } from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

type ProfileType = {
  profile: any; //todo
  status: string;
  updateUserStatus: any; //todo
};

export const Profile: FC<ProfileType> = ({
  profile,
  status,
  updateUserStatus,
}) => {
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
