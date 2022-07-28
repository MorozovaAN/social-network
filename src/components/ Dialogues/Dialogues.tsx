import React, { FC } from "react";
import style from "./Dialogues.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import { dialoguesPageType } from "../../redax/state";

type DialoguesType = {
  dialoguesPage: dialoguesPageType;
};

export const Dialogues: FC<DialoguesType> = (props) => {
  let dialoguesItem = props.dialoguesPage.dialogues.map((d) => (
    <Dialog key={d.id} name={d.name} id={d.id} />
  ));

  let messagesItem = props.dialoguesPage.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  return (
    <div className={style.container}>
      <div className={style.dialoguesContainer}>
        <ul className={style.dialogues}>{dialoguesItem}</ul>
      </div>
      <div className={style.messages}>{messagesItem}</div>
    </div>
  );
};
