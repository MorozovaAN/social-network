import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialodues-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
