import React, { FC } from "react";
import style from "./Dialogues.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import { DialoguesPageType } from "../../redux/reducers/dialodues-reducer";

type DialoguesType = {
  dialoguesPage: DialoguesPageType;
  sendMessage: (newMessageBody: string) => void;
};

export const Dialogues: FC<DialoguesType> = ({
  dialoguesPage,
  sendMessage,
}) => {
  const dialoguesItem = dialoguesPage.dialogues.map((d) => (
    <Dialog key={d.id} name={d.name} id={d.id} />
  ));

  const messagesItem = dialoguesPage.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  return (
    <div className={style.container}>
      <div className={style.dialoguesContainer}>
        <ul className={style.dialogues}>{dialoguesItem}</ul>
      </div>
      <div className={style.messages}>
        <div>{messagesItem}</div>
        <textarea></textarea>
      </div>
    </div>
  );
};
