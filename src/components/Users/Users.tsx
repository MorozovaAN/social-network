import s from "./Users.module.css";
import React, { FC } from "react";
import { UserType } from "../../redux/reducers/users-reducer";
import { NavLink } from "react-router-dom";

type UsersType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  users: UserType[];
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  followingInProgress: any[];
};

export const Users: FC<UsersType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  follow,
  unfollow,
  followingInProgress,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p, index) => (
          <button
            key={index}
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
            <NavLink to={`/profile/` + u.id}>
              <img
                className={s.avatar}
                src={
                  u.photos.small
                    ? u.photos.small
                    : "https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"
                }
                alt="avatar"
              />
            </NavLink>
            {u.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  unfollow(u.id);
                  // setFollowingInProgress(true, u.id);
                  //
                  // userAPI.unfollowUser(u.id).then((response) => {
                  //   if (response.data.resultCode === 0) {
                  //     unfollow(u.id);
                  //   }
                  //   setFollowingInProgress(false, u.id);
                  // });
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  follow(u.id);
                  // setFollowingInProgress(true, u.id);
                  // userAPI.followUser(u.id).then((response) => {
                  //   if (response.data.resultCode === 0) {
                  //     follow(u.id);
                  //   }
                  //   setFollowingInProgress(false, u.id);
                  // });
                }}
              >
                follow
              </button>
            )}
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
