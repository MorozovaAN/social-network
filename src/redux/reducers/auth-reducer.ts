import { authAPI } from "../../api/api";

type authReducerActionType = ReturnType<typeof setAuthUserData>;
type authReducerStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isFetching: boolean;
  isAuth: boolean;
};
const initialState: authReducerStateType = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

export const authReducer = (
  state = initialState,
  action: authReducerActionType
) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null
) => {
  return {
    type: "SET-USER-DATA",
    data: { id, email, login },
  } as const;
};

export const getAuthUserData = () => (dispatch: any) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};
