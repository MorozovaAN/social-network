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
  login: string | null;
};

class HeaderContainer extends React.Component<any, PropsType> {
  render() {
    return (
      <Header
        isAuth={this.props.isAuth}
        login={this.props.login}
        logoutUser={this.props.logoutUser}
      />
    );
  }
}
type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchToPropsType = {
  logoutUser: () => void;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
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
