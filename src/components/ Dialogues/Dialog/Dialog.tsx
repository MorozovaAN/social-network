import s from "../Dialogues.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

type DialogType = {
  name: string;
  id: number;
};

export const Dialog = (props: DialogType) => {
  const path = `dialogues/${props.id}`;

  return (
    <li className={s.dialog}>
      <NavLink className={s.link} to={path}>
        <p className={props.id === 2 ? s.active : ""}>{props.name}</p>
      </NavLink>
    </li>
  );
};
