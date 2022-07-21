import React from "react";
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.item}>
          <a href="src/components/NavBar/Navbar#" className={style.link}>
            Profile
          </a>
        </li>
        <li className={style.item}>
          <a href="src/components/NavBar/Navbar#" className={style.link}>
            Messages
          </a>
        </li>
        <li className={style.item}>
          <a href="src/components/NavBar/Navbar#" className={style.link}>
            Main content
          </a>
        </li>
      </ul>
    </nav>
  );
};
