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

type ActionsTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>;

export type PostType = {
  id: number;
  text: string;
  likesCount: number;
};
export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
};

let initialState: ProfilePageType = {
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
): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, text: state.newPostText, likesCount: 0 },
        ],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    default:
      return state;
  }
};
export default profileReducer;
