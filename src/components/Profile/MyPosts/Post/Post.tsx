import React from "react";
import s from "./Post.module.css";
import { ProfileType } from "../../../../redux/reducers/profile-reducer";
import FavoriteIcon from "@mui/icons-material/Favorite";

type PostType = {
  message: string;
  likesCount: number;
  profile: ProfileType;

  authorizedUserId: number | null;
};

export const Post: React.FC<PostType> = ({
  profile,
  authorizedUserId,
  message,
  likesCount,
}) => {
  return profile ? (
    <>
      {authorizedUserId === profile.userId && (
        <div className={s.post}>
          <img
            className={s.avatar}
            src={profile.photos.small ? profile.photos.small : ""}
            alt="avatar"
          />
          <div className={s.container}>
            <p>{message}</p>
            <div className={s.like}>
              <FavoriteIcon color="secondary" />
              {likesCount}
            </div>
          </div>
        </div>
      )}
    </>
  ) : (
    <></>
  );
};
