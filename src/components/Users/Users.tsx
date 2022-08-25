import React, { FC } from "react";
import { UserType } from "../../redux/users-reducer";
import s from "./Users.module.css";
import axios from "axios";

type UsersType = {
  users: any;
  setUsers: (users: UserType[]) => void;
  follow: (userID: number) => void;
};

export class Users extends React.Component<UsersType> {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
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
