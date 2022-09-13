import React from "react";
import { UsersType } from "./UsersContainer";
import { Users } from "./Users";
import { userAPI } from "../../api/api";

export class UsersAPIComponent extends React.Component<UsersType> {
  componentDidMount() {
    this.props.setIsFetching(true);
    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.items);
        //this.props.setTotalUsersCount(response.data.totalCount);
        //всего там 20 тыщ юзеров, слишком много чтоб отображать страницы (получается больше 4тыс страниц)
      });
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);

    userAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.setIsFetching(false);
      this.props.setUsers(response.items);
    });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <span>preloader img</span>
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.follow}
            setFollowingInProgress={this.props.setFollowingInProgress}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}
