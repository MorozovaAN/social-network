import style from "../Dialogues.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

type DialogType = {
  name: string;
  id: number;
};

export const Dialog = (props: DialogType) => {
  let path = `/dialogues/${props.id}`;
  return (
    <li className={style.dialog}>
      <NavLink className={style.link} to={path}>
        {props.name}
      </NavLink>
    </li>
  );
};
