import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { UsersAPIComponent } from "./UsersAPIComponent";
import {
  setCurrentPage,
  UserType,
  requestUsers,
  follow,
  unfollow,
} from "../../redux/reducers/users-reducer";
import { AppStateType } from "../../redux/store";
import { compose } from "redux";
import {
  getAllUsers,
  getCurrentPage,
  getFetching,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
} from "../../redux/reducers/users-selectors";

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};

type MapDispatchToPropsType = {
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  getUsers: any;
};

export type UsersType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export const UsersContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers: requestUsers,
  })
)(UsersAPIComponent);
