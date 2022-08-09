import React, { FC } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Dialogues } from "./components/ Dialogues/Dialogues";
import { Route, Routes } from "react-router-dom";
import { ActionsTypes, stateType } from "./redax/state";

type AppType = {
  state: stateType;
  dispatch: (action: ActionsTypes) => void;
};

export const App: FC<AppType> = ({ state, dispatch }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="content-wrapper">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile profilePage={state.profilePage} dispatch={dispatch} />
            }
          />
          <Route
            path="/dialogues/*"
            element={
              <Dialogues
                dialoguesPage={state.dialoguesPage}
                dispatch={dispatch}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
