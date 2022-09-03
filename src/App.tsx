import React, { FC } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/Navbar";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { DialoguesContainer } from "./components/ Dialogues/DialoguesContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

type AppType = {};

export const App: FC<AppType> = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/dialogues/*" element={<DialoguesContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};
