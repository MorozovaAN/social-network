import React, { FC } from "react";
import style from "./Dialogues.module.css";
import { Dialog } from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import { DialoguesPageType } from "../../redux/reducers/dialodues-reducer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

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

  const addNewMessage = (formData: FormDataType) => {
    sendMessage(formData.newMessageBody);
  };

  return (
    <div className={style.container}>
      <div className={style.dialoguesContainer}>
        <ul className={style.dialogues}>{dialoguesItem}</ul>
      </div>
      <div className={style.messages}>
        <div>{messagesItem}</div>
        <AddNewMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export const AddNewMessageForm: FC<InjectedFormProps<FormDataType>> = (
  props
) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        component="textarea"
        name="newMessageBody"
        placeholder="Enter your message"
      />
      <button>Send</button>
    </form>
  );
};

type FormDataType = {
  newMessageBody: string;
};
export const AddNewMessageReduxForm = reduxForm<FormDataType>({
  form: "dialogAddNewMessage",
})(AddNewMessageForm);
