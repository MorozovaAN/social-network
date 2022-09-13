import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props: any) => {
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
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
