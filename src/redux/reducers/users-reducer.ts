export type UsersPageType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: any[];
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
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof setIsFetchingAC>
  | ReturnType<typeof setFollowingInProgressAC>;

export const followAC = (userID: number) =>
  ({ type: "FOLLOW", userID } as const);
export const unfollowAC = (userID: number) =>
  ({ type: "UNFOLLOW", userID } as const);
export const setUsersAC = (users: UserType[]) =>
  ({ type: "SET-USERS", users } as const);
export const setCurrentPageAC = (pageNumber: number) =>
  ({ type: "SET-CURRENT-PAGE", pageNumber } as const);
export const setTotalUsersCountAC = (count: number) =>
  ({ type: "SET-USERS-TOTAL-COUNT", count } as const);
export const setIsFetchingAC = (isFetching: boolean) =>
  ({ type: "SET-IS-FETCHING", isFetching } as const);
export const setFollowingInProgressAC = (
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
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    default:
      return state;
  }
};
export default usersReducer;