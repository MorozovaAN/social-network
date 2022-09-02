export type UsersPageType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
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
};

type ActionsTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setPageAC>
  | ReturnType<typeof setTotalUsersCountAC>;

export const followAC = (userID: number) =>
  ({ type: "FOLLOW", userID } as const);
export const unfollowAC = (userID: number) =>
  ({ type: "UNFOLLOW", userID } as const);
export const setUsersAC = (users: UserType[]) =>
  ({ type: "SET-USERS", users } as const);
export const setPageAC = (pageNumber: number) =>
  ({ type: "SET-CURRENT-PAGE", pageNumber } as const);
export const setTotalUsersCountAC = (count: number) =>
  ({ type: "SET-USERS-TOTAL-COUNT", count } as const);

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
    default:
      return state;
  }
};
export default usersReducer;
