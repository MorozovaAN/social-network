import React, { FC } from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";

type ProfileType = {
  profile: any;
};

export const Profile: FC<ProfileType> = ({ profile }) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  );
};
