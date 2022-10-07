import React from "react";
import { connect } from "react-redux";
import { UsersAPIComponent } from "./UsersAPIComponent";
import {
  setCurrentPageAC,
  setTotalUsersCountAC,
  UserType,
  setFollowingInProgress,
  getUsers,
  follow,
  unfollow,
} from "../../redux/reducers/users-reducer";
import { AppStateType } from "../../redux/store";

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: any[];
};
type MapDispatchToPropsType = {
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (count: number) => void;
  setFollowingInProgress: (
    followingInProgress: boolean,
    userId: number
  ) => void;
  getUsers: any;
};
export type UsersType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export const UsersContainer = connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  setFollowingInProgress: setFollowingInProgress,
  getUsers,
})(UsersAPIComponent);
