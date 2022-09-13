import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialoguesReducer from "./reducers/dialodues-reducer";
import usersReducer from "./reducers/users-reducer";
import { authReducer } from "./reducers/auth-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
