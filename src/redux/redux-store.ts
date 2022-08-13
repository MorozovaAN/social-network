import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialodues-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
});

export let store = createStore(reducers);
