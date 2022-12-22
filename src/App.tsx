import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import { DialoguesContainer } from "./components/ Dialogues/DialoguesContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/reducers/app-reducer";
import { AppStateType } from "./redux/store";

export class App extends React.Component<any> {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <p>loading</p>;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/dialogues/*" element={<DialoguesContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      );
    }
  }
}
export const MapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});
export default connect(MapStateToProps, { initializeApp })(App);
