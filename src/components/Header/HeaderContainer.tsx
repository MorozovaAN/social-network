import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { getAuthUserData } from "../../redux/reducers/auth-reducer";

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
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}
type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchToPropsType = {
  getAuthUserData: any;
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
  getAuthUserData,
})(HeaderContainer);
