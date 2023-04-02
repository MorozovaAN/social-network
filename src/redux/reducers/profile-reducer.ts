import { profileAPI } from "../../api/api";
import { Dispatch } from "redux";

export type ProfileType = {
  aboutMe: null | string;
  contacts: {
    facebook: null | string;
    website: null | string;
    vk: null | string;
    twitter: null | string;
    instagram: null | string;
  };
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: null | string;
  photos: { small: null | string; large: null | string };
  userId: number;
};

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

const initialState: ProfilePageType = {
  posts: [
    {
      id: 1,
      text: "Hi, this is my first post on this social network",
      likesCount: 16,
    },
    {
      id: 2,
      text: "I'm a front-end developer on React, I'll be glad to make friends with other developers",
      likesCount: 21,
    },
  ],
  profile: null,
  status: "No status",
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

    case "SET-USER-PHOTO":
      return { ...state, profile: { ...state.profile, photos: action.photos } };

    default:
      return state;
  }
};

type profileReducerActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setPhoto>;

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

export const setPhoto = (photos: {
  small: null | string;
  large: null | string;
}) =>
  ({
    type: "SET-USER-PHOTO",
    photos,
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

export const updateUserPhoto =
  (file: File) => (dispatch: Dispatch<profileReducerActionsTypes>) => {
    profileAPI.updateUserPhoto(file).then((response) => {
      if (response.data.resultCode === 0) {
        console.log(response);
        dispatch(setPhoto(response.data.data.photos));
      }
    });
  };

export default profileReducer;
