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
    case "UPDATE-NEW-MESSAGE-TEXT":
      return { ...state, newMessageText: action.newText };

    case "SEND-MESSAGE":
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

export const updateNewMessageTextActionCreator = (text: string) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: text,
  } as const;
};
export const sendMessageActionCreator = () => {
  return {
    type: "SEND-MESSAGE",
  } as const;
};

export default dialoguesReducer;
