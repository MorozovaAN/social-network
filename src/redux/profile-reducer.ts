export type PostType = {
  id: number;
  text: string;
  likesCount: number;
};
export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
  profile: any;
};
type ActionsTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof setUserProfile>;

export const addPostActionCreator = () =>
  ({
    type: "ADD-POST",
  } as const);
export const updateNewPostTextActionCreator = (text: string) =>
  ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: text,
  } as const);
export const setUserProfile = (profile: any) =>
  ({
    type: "SET-USER-PROFILE",
    profile,
  } as const);

let initialState: ProfilePageType = {
  posts: [
    { id: 1, text: "Hi, how are you", likesCount: 12 },
    { id: 2, text: "It's my friends", likesCount: 15 },
    { id: 3, text: "yoo", likesCount: 5 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsTypes
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, text: state.newPostText, likesCount: 0 },
        ],
        newPostText: "",
      };

    case "UPDATE-NEW-POST-TEXT":
      return { ...state, newPostText: action.newText };
    case "SET-USER-PROFILE":
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};
export default profileReducer;
