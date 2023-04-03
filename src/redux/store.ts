import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialoguesReducer from "./reducers/dialodues-reducer";
import usersReducer from "./reducers/users-reducer";
import { authReducer } from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./reducers/app-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
