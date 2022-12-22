import { getAuthUserData } from "./auth-reducer";

type appReducerStateType = {
  initialized: boolean;
};

const initialState: appReducerStateType = {
  initialized: false,
};
export const appReducer = (
  state = initialState,
  action: appReducerActionsType
) => {
  switch (action.type) {
    case "INITIALIZED-SUCCESS":
      return { ...state, initialized: true };
    default:
      return state;
  }
};

const initializedSuccess = () => {
  return {
    type: "INITIALIZED-SUCCESS",
  } as const;
};

export const initializeApp = () => (dispatch: any) => {
  //todo fia any
  dispatch(getAuthUserData()).then(() => {
    dispatch(initializedSuccess());
  });
};

type appReducerActionsType = ReturnType<typeof initializedSuccess>;
