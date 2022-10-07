import React, { useEffect } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  getUserProfile,
  ProfilePageType,
} from "../../redux/reducers/profile-reducer";
import { useNavigate, useParams } from "react-router-dom";

const ProfileContainer = (props: any) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.isAuth) {
      return navigate("/login");
    }
  }, [props.isAuth]);

  const params = useParams<"*">();
  let userId = params["*"];

  if (!userId) {
    userId = "2";
  }
  useEffect(() => {
    props.getUserProfile(userId);
  }, []);

  return <Profile {...props} profile={props.profile} />;
};
type MapStateToPropsType = {
  profile: ProfilePageType;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  getUserProfile: any;
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  getUserProfile,
})(ProfileContainer);
