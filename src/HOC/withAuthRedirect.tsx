import React, { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/store";

type mapStateToPropsType = { isAuth: boolean };

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export function withAuthRedirectComponent(Component: ComponentType<any>) {
  const RedirectComponent = (props: mapStateToPropsType) => {
    const { isAuth, ...restProps } = props;
    const navigate = useNavigate();
    console.log(restProps);
    useEffect(() => {
      if (!isAuth) {
        return navigate("/login");
      }
    }, [isAuth]);

    return <Component {...restProps} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
}
