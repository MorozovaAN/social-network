import React, { FC, useState } from "react";
import s from "./Dialogues.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import { DialoguesPageType } from "../../redux/reducers/dialodues-reducer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type DialoguesType = {
  dialoguesPage: DialoguesPageType;
  sendMessage: (newMessageBody: string) => void;
};

export const Dialogues: FC<DialoguesType> = ({
  dialoguesPage,
  sendMessage,
}) => {
  const [messageValue, setMessageValue] = useState("");

  const dialoguesItem = dialoguesPage.dialogues.map((d) => (
    <Dialog key={d.id} name={d.name} id={d.id} />
  ));

  const messagesItem = dialoguesPage.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageValue(e.currentTarget.value);
  };

  const sendMessageHandler = () => {
    sendMessage(messageValue);
    setMessageValue("");
  };

  const cleanMessageHandler = () => {
    setMessageValue("");
  };

  return (
    <div className={s.dialoguesWrapper}>
      <div className={s.container}>
        <div className={s.dialoguesContainer}>
          <ul className={s.dialogues}>{dialoguesItem}</ul>
        </div>
        <div className={s.messages}>
          <Message message="Hi!" />
          <Message message="What's app?" />
          <p className={s.messageAnswer}>I'm good and you?</p>
          <div>{messagesItem}</div>
        </div>
      </div>

      <div className={s.textareaContainer}>
        <TextField
          className={s.textarea}
          value={messageValue}
          color="secondary"
          onChange={changeStatus}
          multiline
          rows={2}
          label="write your message"
        />

        <div className={s.buttonsContainer}>
          <Button
            onClick={sendMessageHandler}
            variant="contained"
            color="secondary"
            classes={{ root: s.button }}
            disabled={!messageValue}
          >
            Send post
          </Button>

          <Button
            onClick={cleanMessageHandler}
            variant="outlined"
            color="secondary"
            classes={{ root: s.button }}
            disabled={!messageValue}
          >
            Reset post
          </Button>
        </div>
      </div>
    </div>
  );
};
