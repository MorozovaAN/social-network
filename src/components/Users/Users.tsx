import React, { FC } from "react";
import { UserType } from "../../redux/users-reducer";
import s from "./Users.module.css";

type UsersType = {
  users: UserType[];
  follow: (userID: number) => void;
};
export const Users: FC<UsersType> = ({ users, follow }) => {
  const mapUsers = users.map((u) => (
    <div className={s.container} key={u.id}>
      <div>
        <img
          className={s.avatar}
          src="https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"
          alt="avatar"
        />
        <button
          onClick={() => {
            follow(u.id);
          }}
        >
          {u.followed ? "unfollow" : "follow"}
        </button>
      </div>

      <div className={s.infoContainer}>
        <div>
          <h3 className={s.userName}>{u.fullName}</h3> <span>{u.status}</span>
        </div>

        <div>
          <p>{u.location.city},</p>
          <p>{u.location.country}</p>
        </div>
      </div>
    </div>
  ));

  return <div>{mapUsers}</div>;
};
