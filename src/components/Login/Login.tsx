import React, { FC } from "react";
import s from "./Login.module.css";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

export const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  };

  return (
    <>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};
export const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Field
        component={"input"}
        name={"login"}
        type="text"
        placeholder="login"
      />
      <Field
        component={"input"}
        name={"password"}
        type="password"
        placeholder="password"
      />
      <div>
        <Field component={"input"} name={"rememberMe"} type="checkbox" />
        <span>remember me</span>
      </div>

      <button className={s.btnSubmit}>log in</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({
  form: "login",
})(LoginForm);
