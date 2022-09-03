import React from "react";
import axios from "axios";
import { UsersType } from "./UsersContainer";
import { Users } from "./Users";

export class UsersAPIComponent extends React.Component<UsersType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        //this.props.setTotalUsersCount(response.data.totalCount);
        //всего 20 тыщ юзеров, слишком много чтоб отображать страницы (получается больше 4тыс страниц)
      });
  }
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
      />
    );
  }
}
