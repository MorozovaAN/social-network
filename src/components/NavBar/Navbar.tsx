import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/dialogues"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            Dialogues
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="src/components/NavBar/Navbar#"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            Main content
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
