import React, { FC } from "react";
import s from "./Login.module.css";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { ElementControl } from "../common/FormsControls/TextareaControl/ElementControl";
import { maxLengthCreator, requiredField } from "../../helpers/validators";

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

const maxLength10 = maxLengthCreator(10);
export const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Field
        component={ElementControl}
        element="input"
        validate={[requiredField, maxLength10]}
        name="login"
        type="text"
        placeholder="login"
      />
      <Field
        component={ElementControl}
        element="input"
        name="password"
        type="password"
        validate={[requiredField, maxLength10]}
        placeholder="password"
      />
      <div>
        <Field component="input" name="rememberMe" type="checkbox" />
        <span>remember me</span>
      </div>

      <button className={s.btnSubmit}>log in</button>
    </form>
  );
};

export const LoginReduxForm = reduxForm<FormDataType>({
  form: "login",
})(LoginForm);
