import React, { useEffect } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  getUserProfile,
  getUserStatus,
  ProfilePageType,
  ProfileType,
  updateUserStatus,
  updateUserPhoto,
  updateUserInfo,
} from "../../redux/reducers/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirectComponent } from "../../HOC/withAuthRedirect";
import { compose } from "redux";
import { UserInfoType } from "../../api/api";

type ProfileContainerType = {
  getUserProfile: (userID: string) => void;
  getUserStatus: (title: string) => void;
  updateUserStatus: (value: string) => void;
  profile: ProfileType;
  status: string;
  authorizedUserId: number;
  updateUserPhoto: (file: File) => void;
  updateUserInfo: (info: UserInfoType) => void;
};

const ProfileContainer = (props: ProfileContainerType) => {
  const {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    profile,
    status,
    authorizedUserId,
    updateUserPhoto,
    updateUserInfo,
  } = props;

  const params = useParams<"*">();

  useEffect(() => {
    const userId = params["*"] ? params["*"] : `${authorizedUserId}`;
    getUserProfile(userId);
    getUserStatus(userId);
  }, [params]);

  return (
    <Profile
      {...props}
      authorizedUserId={authorizedUserId}
      profile={profile}
      status={status}
      updateUserStatus={updateUserStatus}
      updateUserPhoto={updateUserPhoto}
      updateUserInfo={updateUserInfo}
    />
  );
};

type MapStateToPropsType = {
  profile: ProfilePageType;
  status: string;
  authorizedUserId: number | null;
};

type MapDispatchToPropsType = {
  getUserProfile: (userID: string) => void;
  getUserStatus: (userID: string) => void;
  updateUserStatus: (title: string) => void;
  updateUserPhoto: (file: File) => void;
  updateUserInfo: (info: UserInfoType) => void;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
  };
};

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    {
      getUserProfile,
      getUserStatus,
      updateUserStatus,
      updateUserPhoto,
      updateUserInfo,
    }
  ),
  withAuthRedirectComponent
)(ProfileContainer);
