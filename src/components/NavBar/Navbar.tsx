import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { Dialogues } from "../ Dialogues/Dialogues";

export const NavBar = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            to="/profile"
            className={style.link}
            activeClassName={style.active}
          >
            Profile
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/dialogues"
            className={style.link}
            activeClassName={style.active}
          >
            Dialogues
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="src/components/NavBar/Navbar#"
            className={style.link}
            activeClassName={style.active}
          >
            Main content
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
