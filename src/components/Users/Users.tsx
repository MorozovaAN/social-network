import s from "./Users.module.css";
import React, { FC } from "react";
import { UserType } from "../../redux/users-reducer";

type UsersType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  users: UserType[];
  follow: (userID: number) => void;
};

export const Users: FC<UsersType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  follow,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
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
              onPageChanged(p);
            }}
            className={p === currentPage ? s.selectedPage : ""}
          >
            {p}
          </button>
        ))}
      </div>
      {users.map((u: any) => (
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
                follow(u.id);
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
};
