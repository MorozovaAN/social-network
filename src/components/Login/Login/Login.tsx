import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { loginUser, setError } from "../../../redux/reducers/auth-reducer";
import { AppStateType } from "../../../redux/store";
import { Navigate } from "react-router-dom";
import s from "./Login.module.css";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

type FormikErrorType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

const Login = (props: any) => {
  const dispatch = useDispatch();
  const [demo, setDemo] = useState(false);

  useEffect(() => {
    if (props.error) {
      setTimeout(() => {
        dispatch(props.setError(""));
      }, 2000);
    }
  }, [props.error]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validate: (values) => {
      const errors: FormikErrorType = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password.trim()) {
        errors.password = "Password is required";
      } else if (values.password.trim().length < 8) {
        errors.password = "Password should be 8 symbols at less";
      }

      return demo ? { password: "", email: "" } : errors;
    },

    onSubmit: (values) => {
      props.loginUser(
        values.email.toLowerCase(),
        values.password,
        values.rememberMe
      );
    },
  });

  const useDemo = () => {
    setDemo(true);
    props.loginUser("MorozovaAnastasiyaN@yandex.ru", "c539491b44", false);
  };

  return props.isAuth ? (
    <Navigate to="/profile" />
  ) : (
    <>
      <h2 className={s.title}>Sign in Social network for developers</h2>

      <form onSubmit={formik.handleSubmit} className={s.form}>
        <TextField
          label={formik.touched.email ? formik.errors.email : "Email"}
          classes={{ root: s.item }}
          type="email"
          color="secondary"
          variant="standard"
          {...formik.getFieldProps("email")}
          error={Boolean(formik.touched.email && formik.errors.email)}
        />

        <TextField
          color="secondary"
          label={formik.touched.password ? formik.errors.password : "Password"}
          classes={{ root: s.item }}
          type="password"
          variant="standard"
          {...formik.getFieldProps("password")}
          error={Boolean(formik.touched.password && formik.errors.password)}
        />

        <FormControlLabel
          classes={{ root: s.checkbox }}
          control={<Checkbox color="secondary" />}
          label="Remember me"
        />

        <p className={s.error}>{props.error}</p>

        <div className={s.buttonsContainer}>
          <Button
            classes={{ root: s.button }}
            size="large"
            variant="contained"
            type="submit"
            color="secondary"
            onClick={useDemo}
          >
            Use demo account
          </Button>

          <Button
            classes={{ root: s.button }}
            size="large"
            variant="outlined"
            type="submit"
            color="secondary"
            disabled={
              !!formik.errors.password ||
              !!formik.errors.email ||
              !formik.values.email ||
              !formik.values.password
            }
          >
            Sign in
          </Button>
        </div>
      </form>
    </>
  );
};
const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  error: state.auth.error,
});
export default connect(mapStateToProps, { loginUser, setError })(Login);
