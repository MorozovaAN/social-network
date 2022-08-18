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

type ActionsTypes =
  | ReturnType<typeof sendMessageActionCreator>
  | ReturnType<typeof updateNewMessageTextActionCreator>;

export type DialoguesPageType = {
  dialogues: DialogType[];
  messages: MessageType[];
  newMessageText: string;
};
type DialogType = {
  id: number;
  name: string;
};
type MessageType = {
  id: number;
  message: string;
};

const initialState: DialoguesPageType = {
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
): DialoguesPageType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newText };

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,
            message: state.newMessageText,
          },
        ],
        newMessageText: "",
      };

    default:
      return state;
  }
};
export default dialoguesReducer;
