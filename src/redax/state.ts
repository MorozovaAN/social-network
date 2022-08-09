import profileReducer, {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./profile-reducer";
import dialoguesReducer, {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "./dialodues-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialoguesPage = dialoguesReducer(
      this._state.dialoguesPage,
      action
    );

    this._callSubscriber();
  },
};
