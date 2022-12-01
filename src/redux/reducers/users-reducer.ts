import { userAPI } from "../../api/api";
import { Dispatch } from "redux";

export type UsersPageType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: number[];
};
export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: PhotosType;
  status: string | null;
  followed: boolean;
};
type PhotosType = {
  small: string | null;
  large: string | null;
};

const initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

type ActionsTypes =
  | ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof setFollowingInProgress>;

export const followSuccess = (userID: number) =>
  ({ type: "FOLLOW", userID } as const);
export const unfollowSuccess = (userID: number) =>
  ({ type: "UNFOLLOW", userID } as const);
export const setUsers = (users: UserType[]) =>
  ({ type: "SET-USERS", users } as const);
export const setCurrentPage = (pageNumber: number) =>
  ({ type: "SET-CURRENT-PAGE", pageNumber } as const);
export const setTotalUsersCount = (count: number) =>
  ({ type: "SET-USERS-TOTAL-COUNT", count } as const);
export const setIsFetching = (isFetching: boolean) =>
  ({ type: "SET-IS-FETCHING", isFetching } as const);
export const setFollowingInProgress = (
  followingInProgress: boolean,
  userId: number
) =>
  ({ type: "SET-FOLLOWING-IN-PROGRESS", followingInProgress, userId } as const);

const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionsTypes
): UsersPageType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userID ? { ...u, followed: !u.followed } : u
        ),
      };

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userID ? { ...u, followed: !u.followed } : u
        ),
      };

    case "SET-USERS":
      return { ...state, users: [...action.users, ...state.users] };
    case "SET-CURRENT-PAGE":
      return { ...state, currentPage: action.pageNumber };
    case "SET-USERS-TOTAL-COUNT":
      return { ...state, totalUsersCount: action.count };
    case "SET-IS-FETCHING":
      return { ...state, isFetching: action.isFetching };
    case "SET-FOLLOWING-IN-PROGRESS":
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(setIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      //dispatch(setTotalUsersCount(data.totalCount));
      //всего там 20 тыщ юзеров, слишком много чтоб отображать страницы (получается больше 4тыс страниц)
    });
  };
};

export const follow = (userId: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(setFollowingInProgress(true, userId));

    userAPI.followUser(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(setFollowingInProgress(false, userId));
    });
  };
};

export const unfollow = (userId: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(setFollowingInProgress(true, userId));

    userAPI.unfollowUser(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(setFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
