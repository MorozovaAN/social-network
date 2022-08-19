import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialodues-reducer";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  usersPage: usersReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
