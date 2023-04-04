import React, { FC } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/developer.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

type HeaderPropsType = {
  logoutUser: () => void;
  isAuth: boolean;
  userName: string | undefined;
};

export const Header: FC<HeaderPropsType> = ({
  logoutUser,
  isAuth,
  userName,
}) => {
  console.log(userName);
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <img alt="logo" width="50" height="50" src={logo} />
        <h1 className={s.title}>
          Social network <br /> for developers
        </h1>
      </div>

      <div>
        {isAuth ? (
          <div className={s.userContainer}>
            <p className={s.userName}>{userName}</p>
            <LogoutIcon className={s.icon} onClick={() => logoutUser()} />
          </div>
        ) : (
          <NavLink to="/login" className={s.loginContainer}>
            <p>Sign in</p>
            <LoginIcon fontSize="small" className={s.icon} />
          </NavLink>
        )}
      </div>
    </header>
  );
};
