import style from "../Dialogues.module.css";
import React from "react";

export const Message = (props: { message: string }) => {
  return <p className={style.message}>{props.message}</p>;
};
