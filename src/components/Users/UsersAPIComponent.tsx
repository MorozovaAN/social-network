import React from "react";
import { UsersType } from "./UsersContainer";
import { Users } from "./Users";
import CircularProgress from "@mui/material/CircularProgress";
import s from "./UsersAPIComponent.module.css";

export class UsersAPIComponent extends React.Component<UsersType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };
  render() {
    return (
      <div className={s.UsersAPIComponent}>
        {this.props.isFetching ? (
          <div className={s.circularProgress}>
            <CircularProgress color="secondary" size={60} />
          </div>
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </div>
    );
  }
}
