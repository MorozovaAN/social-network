export type stateType = {
  dialoguesPage: DialoguesPageType;
  profilePage: ProfilePageType;
};
export type DialoguesPageType = {
  dialogues: Array<DialogType>;
  messages: Array<MessageType>;
  newMessageText: string;
};
export type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};
export type DialogType = {
  id: number;
  name: string;
};
export type MessageType = {
  id: number;
  message: string;
};
export type PostType = {
  id: number;
  text: string;
  likesCount: number;
};

export type ActionsTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof updateNewMessageTextActionCreator>
  | ReturnType<typeof sendMessageActionCreator>;

export type storeType = {
  _state: stateType;
  getState: () => stateType;
  _callSubscriber: () => void;
  subscriber: (observer: () => void) => void;
  dispatch: (action: ActionsTypes) => void;
};

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

export let store: storeType = {
  _state: {
    dialoguesPage: {
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
    },
    profilePage: {
      posts: [
        { id: 1, text: "Hi, how are you", likesCount: 12 },
        { id: 2, text: "It's my friends", likesCount: 15 },
        { id: 3, text: "yoo", likesCount: 5 },
      ],
      newPostText: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("rerender");
  },
  subscriber(observer: () => void) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost: PostType = {
        id: 5,
        text: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialoguesPage.newMessageText = action.newText;
      this._callSubscriber();
    } else if (action.type === SEND_MESSAGE) {
      this._state.dialoguesPage.messages.push({
        id: 4,
        message: this._state.dialoguesPage.newMessageText,
      });
      this._state.dialoguesPage.newMessageText = "";
      this._callSubscriber();
    }
  },
};

export const addPostActionCreator = () =>
  ({
    type: ADD_POST,
  } as const);

export const updateNewPostTextActionCreator = (text: string) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  } as const);

export const updateNewMessageTextActionCreator = (text: string) =>
  ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  } as const);

export const sendMessageActionCreator = () =>
  ({
    type: SEND_MESSAGE,
  } as const);
