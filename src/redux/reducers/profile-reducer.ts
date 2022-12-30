import { profileAPI } from "../../api/api";
import { Dispatch } from "redux";

export type PostType = {
  id: number;
  text: string;
  likesCount: number;
};
export type ProfilePageType = {
  posts: PostType[];
  profile: any;
  status: string;
};

let initialState: ProfilePageType = {
  posts: [
    { id: 1, text: "Hi, how are you", likesCount: 12 },
    { id: 2, text: "It's my friends", likesCount: 15 },
    { id: 3, text: "yoo", likesCount: 5 },
  ],
  profile: null,
  status: "дефолт",
};

const profileReducer = (
  state: ProfilePageType = initialState,
  action: profileReducerActionsTypes
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, text: action.newPostBody, likesCount: 0 },
        ],
      };

    case "SET-USER-PROFILE":
      return { ...state, profile: action.profile };

    case "SET-USER-STATUS":
      return { ...state, status: action.status };

    default:
      return state;
  }
};

type profileReducerActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>;

export const addPostAC = (newPostBody: string) =>
  ({
    type: "ADD-POST",
    newPostBody,
  } as const);

export const setUserProfile = (profile: any) =>
  ({
    type: "SET-USER-PROFILE",
    profile,
  } as const);

export const setStatus = (status: string) =>
  ({
    type: "SET-USER-STATUS",
    status,
  } as const);

export const getUserProfile =
  (userID: string) => (dispatch: Dispatch<profileReducerActionsTypes>) => {
    profileAPI.getProfile(userID).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };

export const getUserStatus =
  (userID: string) => (dispatch: Dispatch<profileReducerActionsTypes>) => {
    profileAPI.getStatus(userID).then((response) => {
      dispatch(setStatus(response.data));
    });
  };

export const updateUserStatus =
  (status: string) => (dispatch: Dispatch<profileReducerActionsTypes>) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };

export default profileReducer;
