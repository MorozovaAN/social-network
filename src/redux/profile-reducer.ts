import { ActionsTypes, PostType, ProfilePageType } from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () =>
  ({
    type: ADD_POST,
  } as const);
export const updateNewPostTextActionCreator = (text: string) =>
  ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  } as const);

let initialState = {
  posts: [
    { id: 1, text: "Hi, how are you", likesCount: 12 },
    { id: 2, text: "It's my friends", likesCount: 15 },
    { id: 3, text: "yoo", likesCount: 5 },
  ],
  newPostText: "",
};

const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsTypes
) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: 5,
        text: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    }

    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.newText;
      return state;
    }

    default:
      return state;
  }
};
export default profileReducer;
