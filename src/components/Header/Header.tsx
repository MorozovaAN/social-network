import React from "react";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <img
        alt="logo"
        width="50"
        height="50"
        src="https://papik.pro/uploads/posts/2021-11/1636129272_1-papik-pro-p-vektor-logotip-foto-3.png"
      />
      <p>header</p>
    </header>
  );
};
