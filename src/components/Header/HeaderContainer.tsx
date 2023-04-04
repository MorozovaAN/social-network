import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { logoutUser } from "../../redux/reducers/auth-reducer";

type PropsType = {
  setAuthUserData: (
    id: number | null,
    email: string | null,
    login: string | null
  ) => void;
  isAuth: boolean;
  userName: string;
};

class HeaderContainer extends React.Component<any, PropsType> {
  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        logoutUser={this.props.logoutUser}
        userName={this.props.userName}
      />
    );
  }
}
type MapStateToPropsType = {
  isAuth: boolean;
  userName: string;
};
type MapDispatchToPropsType = {
  logoutUser: () => void;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    userName: state.profilePage.profile.fullName,
  };
};

export default connect<
  MapStateToPropsType,
  MapDispatchToPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  logoutUser,
})(HeaderContainer);
