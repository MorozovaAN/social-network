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

let initialState = {
  dialogues: [
    { id: 1, name: "Sveta" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Anna" },
    { id: 4, name: "Max" },
    { id: 5, name: "Lena" },
  ],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "What's app?" },
    { id: 3, message: "Yo" },
  ],
  newMessageText: "",
};

const dialoguesReducer = (
  state: DialoguesPageType = initialState,
  action: ActionsTypes
) => {
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
