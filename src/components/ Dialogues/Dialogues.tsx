import React, { FC, ChangeEvent } from "react";
import style from "./Dialogues.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import { ActionsTypes, DialoguesPageType } from "../../redux/state";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialodues-reducer";

type DialoguesType = {
  dialoguesPage: DialoguesPageType;
  dispatch: (action: ActionsTypes) => void;
};

export const Dialogues: FC<DialoguesType> = (props) => {
  const dialoguesItem = props.dialoguesPage.dialogues.map((d) => (
    <Dialog key={d.id} name={d.name} id={d.id} />
  ));

  let messagesItem = props.dialoguesPage.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  const addMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
  };

  return (
    <div className={style.container}>
      <div className={style.dialoguesContainer}>
        <ul className={style.dialogues}>{dialoguesItem}</ul>
      </div>
      <div className={style.messages}>
        <div>{messagesItem}</div>
        <textarea
          onChange={onChangeMessage}
          value={props.dialoguesPage.newMessageText}
          placeholder="Enter your message"
        ></textarea>
        <button type="button" onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
  );
};
