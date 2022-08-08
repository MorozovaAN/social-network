export type stateType = {
  dialoguesPage: dialoguesPageType;
  profilePage: profilePageType;
};
export type dialoguesPageType = {
  dialogues: Array<dialogType>;
  messages: Array<messageType>;
};
export type profilePageType = {
  posts: Array<postType>;
  newPostText: string;
};
export type dialogType = {
  id: number;
  name: string;
};
export type messageType = {
  id: number;
  message: string;
};
export type postType = {
  id: number;
  text: string;
  likesCount: number;
};
type storeType = {
  _state: stateType;
  getState: () => stateType;
  _callSubscriber: () => void;
  subscriber: (observer: () => void) => void;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
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
  addPost() {
    const newPost: postType = {
      id: 5,
      text: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber();
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
};
