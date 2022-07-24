import React from "react";
import style from "./Dialogues.module.css";
import { NavLink } from "react-router-dom";
import { message } from "antd";

type DialogItemType = {
  name: string;
  id: number;
};
const DialogItem = (props: DialogItemType) => {
  let path = `/dialogues/${props.id}`;
  return (
    <li className={style.dialog}>
      <NavLink className={style.link} to={path}>
        {props.name}
      </NavLink>
    </li>
  );
};

const Message = (props: { message: string }) => {
  return <p className={style.message}>{props.message}</p>;
};

export const Dialogues = () => {
  return (
    <div className={style.container}>
      <div className={style.dialoguesContainer}>
        <ul className={style.dialogues}>
          <DialogItem name={"Sveta"} id={1} />
          <DialogItem name={"Ivan"} id={2} />
          <DialogItem name={"Anna"} id={3} />
          <DialogItem name={"Max"} id={4} />
          <DialogItem name={"Lena"} id={5} />
        </ul>
      </div>
      <div className={style.messages}>
        <Message message={"Hi!"} />
        <Message message={"What's app?"} />
        <Message message={"Yo"} />
      </div>
    </div>
  );
};
