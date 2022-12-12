import { authAPI } from "../../api/api";
import { Dispatch } from "redux";

type authReducerActionsType = ReturnType<typeof setAuthUserData>;
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
  action: authReducerActionsType
) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: "SET-USER-DATA",
    payload: {
      id,
      email,
      login,
      isAuth,
    },
  } as const;
};

export const getAuthUserData =
  () => (dispatch: Dispatch<authReducerActionsType>) => {
    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };

export const loginUser =
  (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    //todo fix any
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
  };

export const logoutUser =
  () => (dispatch: Dispatch<authReducerActionsType>) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
