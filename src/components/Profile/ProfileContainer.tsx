import React, { useEffect } from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  ProfilePageType,
  setUserProfile,
} from "../../redux/reducers/profile-reducer";
import { useParams } from "react-router-dom";

const ProfileContainer = (props: any) => {
  const params = useParams<"*">();
  let profileId = params["*"];

  if (!profileId) {
    profileId = "2";
  }
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
      .then((response) => {
        props.setUserProfile(response.data);
      });
  }, []);

  return <Profile {...props} profile={props.profile} />;
};
type MapStateToPropsType = {
  profile: ProfilePageType;
};
type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfilePageType) => void;
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  setUserProfile,
})(ProfileContainer);
