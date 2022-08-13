import React, { FC } from "react";
import { Dialogues } from "./Dialogues";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialodues-reducer";
import { StoreContext } from "../../storeContext";
import { storeType } from "../../redux/state";

type DialoguesContainerType = {};

export const DialoguesContainer: FC<DialoguesContainerType> = () => {
  return (
    <StoreContext.Consumer>
      {(store: storeType) => {
        const sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };
        const updateNewMessageText = (newMessage: string) => {
          store.dispatch(updateNewMessageTextActionCreator(newMessage));
        };
        return (
          <Dialogues
            dialoguesPage={store.getState().dialoguesPage}
            updateNewMessageText={updateNewMessageText}
            sendMessage={sendMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
