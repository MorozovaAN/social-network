import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { UsersAPIComponent } from "./UsersAPIComponent";
import {
  setCurrentPage,
  UserType,
  getUsers,
  follow,
  unfollow,
} from "../../redux/reducers/users-reducer";
import { AppStateType } from "../../redux/store";
import { compose } from "redux";

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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
export const UsersContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
  })
)(UsersAPIComponent);
