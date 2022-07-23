import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import { Dialogues } from "./components/ Dialogues/Dialogues";
import { BrowserRouter, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="content-wrapper">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogues" component={Dialogues} />
        </div>
      </div>
    </BrowserRouter>
  );
}
