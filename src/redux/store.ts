import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialoguesReducer from "./reducers/dialodues-reducer";
import usersReducer from "./reducers/users-reducer";
import { authReducer } from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
