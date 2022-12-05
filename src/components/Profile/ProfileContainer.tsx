import React, { useEffect } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  getUserProfile,
  ProfilePageType,
} from "../../redux/reducers/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirectComponent } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

type ProfileContainerType = {
  getUserProfile: any;
  profile: any;
};

const ProfileContainer = (props: ProfileContainerType) => {
  const { getUserProfile, profile } = props;
  const params = useParams<"*">();
  let userId = params["*"];

  if (!userId) {
    userId = "2";
  }

  useEffect(() => {
    getUserProfile(userId);
  }, []);

  return <Profile {...props} profile={profile} />;
};

type MapStateToPropsType = {
  profile: ProfilePageType;
};
type MapDispatchToPropsType = {
  getUserProfile: any;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    {
      getUserProfile,
    }
  ),
  withAuthRedirectComponent
)(ProfileContainer);
