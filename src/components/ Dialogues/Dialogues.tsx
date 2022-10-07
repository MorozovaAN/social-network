import React, { FC, ChangeEvent, useEffect } from "react";
import style from "./Dialogues.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import { DialoguesPageType } from "../../redux/reducers/dialodues-reducer";
import { useNavigate } from "react-router-dom";

type DialoguesType = {
  dialoguesPage: DialoguesPageType;
  updateNewMessageText: (newMessage: string) => void;
  sendMessage: () => void;
  isAuth: boolean;
};

export const Dialogues: FC<DialoguesType> = ({
  dialoguesPage,
  updateNewMessageText,
  sendMessage,
  isAuth,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [isAuth]);

  const dialoguesItem = dialoguesPage.dialogues.map((d) => (
    <Dialog key={d.id} name={d.name} id={d.id} />
  ));

  const messagesItem = dialoguesPage.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  const onSendMessageClick = () => {
    sendMessage();
  };
  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateNewMessageText(e.currentTarget.value);
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
          value={dialoguesPage.newMessageText}
          placeholder="Enter your message"
        ></textarea>
        <button type="button" onClick={onSendMessageClick}>
          Send
        </button>
      </div>
    </div>
  );
};
