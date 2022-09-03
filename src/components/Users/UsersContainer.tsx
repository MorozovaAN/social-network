import React from "react";
import { connect } from "react-redux";
import { UsersAPIComponent } from "./UsersAPIComponent";
import {
  followAC,
  setPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from "../../redux/users-reducer";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
};
type MapDispatchToPropsType = {
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (count: number) => void;
};
export type UsersType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setPageAC(pageNumber));
    },
    setTotalUsersCount: (count: number) => {
      dispatch(setTotalUsersCountAC(count));
    },
  };
};
export const UsersContainer = connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  {},
  AppStateType
>(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);
