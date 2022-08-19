import React from "react";
import { connect } from "react-redux";
import { Users } from "./Users";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from "../../redux/users-reducer";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";

type mapStateToPropsType = {
  users: UserType[];
};
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    users: state.usersPage.users,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID));
    },
    setUser: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
  };
};
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
