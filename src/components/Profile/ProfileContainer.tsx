import React, { useEffect } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  getUserProfile,
  getUserStatus,
  ProfilePageType,
  updateUserStatus,
} from "../../redux/reducers/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirectComponent } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

type ProfileContainerType = {
  getUserProfile: any; //todo
  getUserStatus: any; //todo
  updateUserStatus: any; //todo
  profile: any; //todo
  status: string;
};

const ProfileContainer = (props: ProfileContainerType) => {
  const { getUserProfile, getUserStatus, updateUserStatus, profile, status } =
    props;
  const params = useParams<"*">();
  let userId = params["*"] ? params["*"] : "9"; //todo

  useEffect(() => {
    getUserProfile(userId);
    getUserStatus(userId);
  }, []);

  return (
    <Profile
      {...props}
      profile={profile}
      status={status}
      updateUserStatus={updateUserStatus}
    />
  );
};

type MapStateToPropsType = {
  profile: ProfilePageType;
  status: string;
};
type MapDispatchToPropsType = {
  getUserProfile: any; //todo
  getUserStatus: any; //todo
  updateUserStatus: any; //todo
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    {
      getUserProfile,
      getUserStatus,
      updateUserStatus,
    }
  ),
  withAuthRedirectComponent
)(ProfileContainer);
