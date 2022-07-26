import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import s from "../Login/Login.module.css";
import { ElementControl } from "../../common/FormsControls/TextareaControl/ElementControl";
import { maxLengthCreator, requiredField } from "../../../helpers/validators";

const maxLength10 = maxLengthCreator(100);
const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = (props) => {
  const { handleSubmit, error } = props;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Field
        component={ElementControl}
        element="input"
        validate={[requiredField, maxLength10]}
        name="email"
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
      {error && <p className={s.formError}>{error}</p>}
      <button className={s.btnSubmit}>log in</button>
    </form>
  );
};

export type LoginFormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const LoginReduxForm = reduxForm<LoginFormDataType>({
  form: "login",
})(LoginForm);
