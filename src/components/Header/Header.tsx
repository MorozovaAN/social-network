import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/developer.svg";
import LogoutIcon from "@mui/icons-material/Logout";

export const Header = (props: any) => {
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <img alt="logo" width="50" height="50" src={logo} />
        <p className={s.title}>
          Social network <br /> for developers
        </p>
      </div>

      <div>
        {props.isAuth ? (
          <div className={s.userContainer}>
            <p className={s.userName}>{props.login}</p>
            <LogoutIcon className={s.logoutBtn} />
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
