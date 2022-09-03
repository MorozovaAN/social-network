import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import { UsersType } from "./UsersContainer";

export class Users extends React.Component<UsersType> {
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
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => (
            <button
              onClick={() => {
                this.onPageChanged(p);
              }}
              className={p === this.props.currentPage ? s.selectedPage : ""}
            >
              {p}
            </button>
          ))}
        </div>
        {this.props.users.map((u: any) => (
          <div className={s.container} key={u.id}>
            <div>
              <img
                className={s.avatar}
                src={
                  u.photos.small
                    ? u.photos.small
                    : "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"
                }
                alt="avatar"
              />
              <button
                onClick={() => {
                  this.props.follow(u.id);
                }}
              >
                {u.followed ? "unfollow" : "follow"}
              </button>
            </div>

            <div className={s.infoContainer}>
              <div>
                <h3 className={s.userName}>{u.name}</h3> <span>{u.status}</span>
              </div>

              <div>
                <p>{"u.location.city"},</p>
                <p>{"u.location.country"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
