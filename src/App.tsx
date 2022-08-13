import React, { FC } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { DialoguesContainer } from "./components/ Dialogues/DialoguesContainer";

type AppType = {};

export const App: FC<AppType> = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogues/*" element={<DialoguesContainer />} />
        </Routes>
      </div>
    </div>
  );
};
