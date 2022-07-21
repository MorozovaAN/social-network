import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}
