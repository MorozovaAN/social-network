export type UsersPageType = {
  users: UserType[];
};
export type UserType = {
  id: number;
  fullName: string;
  followed: boolean;
  status: string;
  location: LocationType;
};
type LocationType = {
  city: string;
  country: string;
};

const initialState: UsersPageType = {
  users: [
    {
      id: 1,
      fullName: "Dmitry",
      followed: false,
      status: "I am a boss",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 2,
      fullName: "Anna",
      followed: true,
      status: "hi!",
      location: { city: "Moscow", country: "Russian" },
    },
    {
      id: 3,
      fullName: "Sveta",
      followed: true,
      status: "hello",
      location: { city: "kiev", country: "Ukraine" },
    },
    {
      id: 4,
      fullName: "Bob",
      followed: false,
      status: "",
      location: { city: "Boston", country: "USA" },
    },
  ],
};

type ActionsTypes =
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>;

export const followAC = (userID: number) =>
  ({ type: "FOLLOW", userID } as const);
export const unfollowAC = (userID: number) =>
  ({ type: "UNFOLLOW", userID } as const);
export const setUsersAC = (users: UserType[]) =>
  ({ type: "SET-USERS", users } as const);

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
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};
export default usersReducer;
