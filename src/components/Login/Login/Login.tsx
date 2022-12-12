import React from "react";
import { LoginReduxForm } from "../LoginForm/LoginForm";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/reducers/auth-reducer";
import { AppStateType } from "../../../redux/store";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
  //todo fix any
  const navigate = useNavigate();

  const onSubmit = (formData: any) => {
    //todo fix any
    const { login, password, rememberMe } = formData;
    props.loginUser(login, password, rememberMe);
  };

  return props.isAuth ? (
    <>{navigate("/profile")}</>
  ) : (
    <>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { loginUser })(Login);
