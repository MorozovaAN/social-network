import React from "react";
import { Header } from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { setAuthUserData } from "../../redux/reducers/auth-reducer";

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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
        }
      });
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
  setAuthUserData: (
    id: number | null,
    email: string | null,
    login: string | null
  ) => void;
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
  setAuthUserData,
})(HeaderContainer);
