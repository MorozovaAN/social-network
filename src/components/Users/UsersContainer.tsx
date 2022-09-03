import React from "react";
import { connect } from "react-redux";
import { UsersAPIComponent } from "./UsersAPIComponent";
import {
  followAC,
  setIsFetchingAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType,
} from "../../redux/users-reducer";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};
type MapDispatchToPropsType = {
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (count: number) => void;
  setIsFetching: (isFetching: boolean) => void;
};
export type UsersType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export const UsersContainer = connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  setIsFetching: setIsFetchingAC,
})(UsersAPIComponent);
