import { ActionsTypes, DialoguesPageType } from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export const updateNewMessageTextActionCreator = (text: string) =>
  ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  } as const);
export const sendMessageActionCreator = () =>
  ({
    type: SEND_MESSAGE,
  } as const);

const dialoguesReducer = (state: DialoguesPageType, action: ActionsTypes) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newText;
      return state;
    }

    case SEND_MESSAGE: {
      state.messages.push({
        id: 4,
        message: state.newMessageText,
      });
      state.newMessageText = "";
      return state;
    }

    default:
      return state;
  }
};
export default dialoguesReducer;
