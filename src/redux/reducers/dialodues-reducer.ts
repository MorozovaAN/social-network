type ActionsTypes = ReturnType<typeof sendMessageAC>;

export type DialoguesPageType = {
  dialogues: DialogType[];
  messages: MessageType[];
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
  messages: [],
};

const dialoguesReducer = (
  state: DialoguesPageType = initialState,
  action: ActionsTypes
): DialoguesPageType => {
  switch (action.type) {
    case "SEND-MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 4,
            message: action.newMessageBody,
          },
        ],
      };

    default:
      return state;
  }
};
export const sendMessageAC = (newMessageBody: string) => {
  return {
    type: "SEND-MESSAGE",
    newMessageBody,
  } as const;
};

export default dialoguesReducer;
