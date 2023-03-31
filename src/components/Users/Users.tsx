import s from "./Users.module.css";
import React, { FC } from "react";
import { UserType } from "../../redux/reducers/users-reducer";
import Pagination from "@mui/material/Pagination";
import { User } from "./User/User";

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
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  return (
    <div className={s.users}>
      <div className={s.usersContainer}>
        {users.map((u: any) => (
          <User
            key={u.id}
            userInfo={u}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
          />
        ))}
      </div>

      <Pagination
        count={pagesCount}
        page={currentPage}
        siblingCount={5}
        onChange={(event, page) => onPageChanged(Number(page))}
        shape="rounded"
        color="secondary"
      />
    </div>
  );
};
