import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import defaultUserIcon from "../../../images/defaultUserIcon.svg";
import s from "./User.module.css";

type UserInfoType = {
  followed: boolean;
  id: number;
  name: string;
  photos: { small: null | string; large: null | string };
  status: null | string;
  uniqueUrlName: null | string;
};

type UserPropsType = {
  userInfo: UserInfoType;
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  followingInProgress: any[];
};

export const User: FC<UserPropsType> = ({
  userInfo,
  follow,
  unfollow,
  followingInProgress,
}) => {
  const btnDisabled = followingInProgress.some((id) => id === userInfo.id);
  return (
    <div className={s.user}>
      <div>
        <NavLink to={`/profile/${userInfo.id}`}>
          <img
            className={s.avatar}
            src={
              userInfo.photos.small ? userInfo.photos.small : defaultUserIcon
            }
            alt="avatar"
          />
        </NavLink>
      </div>

      <div className={s.infoContainer}>
        <h3 className={s.userName}>{userInfo.name}</h3>
        {userInfo.followed ? (
          <Button
            variant="outlined"
            color="secondary"
            disabled={btnDisabled}
            onClick={() => unfollow(userInfo.id)}
            className={s.btn}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="secondary"
            disabled={btnDisabled}
            onClick={() => follow(userInfo.id)}
            className={s.btn}
          >
            Follow
          </Button>
        )}
      </div>
    </div>
  );
};
