import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props: any) => {
  //todo fix any

  return (
    <header className={s.header}>
      <img
        alt="logo"
        width="50"
        height="50"
        src="https://papik.pro/uploads/posts/2021-11/1636129272_1-papik-pro-p-vektor-logotip-foto-3.png"
      />
      <p>header</p>

      <div>
        {props.isAuth ? (
          <span>
            {props.login} <button onClick={props.logoutUser}>log out</button>
          </span>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
