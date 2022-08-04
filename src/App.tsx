import React, { FC } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Dialogues } from "./components/ Dialogues/Dialogues";
import { Route } from "react-router-dom";
import { stateType } from "./redax/state";

type AppType = {
  state: stateType;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
};

export const App: FC<AppType> = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="content-wrapper">
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route
          path="/dialogues"
          render={() => <Dialogues dialoguesPage={props.state.dialoguesPage} />}
        />
      </div>
    </div>
  );
};
