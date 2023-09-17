//rfc
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signinApi } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Login() {
  // show-hide pass
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống !")
        .email("Email không đúng định dạng!"),
      password: Yup.string()
        .required("Password không được bỏ trống !")
        .min(3, "password từ 3 - 32 ký tự")
        .max(32, "password từ 3 - 32 ký tự"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const action = signinApi(values); // {email:"" , password :""}
      dispatch(action);
    },
  });

  // handleChangeIcon
  
   const toggle = () => {
    setPasswordShown(!passwordShown);
    
  };

  return (
    <div className="login">
      <div className="login__title">
        <h3>Login</h3>
      </div>
      <div className="login__form">
        <form className="form__wrap" onSubmit={formik.handleSubmit}>
          <div className="email__form form-group">
            <p>Email</p>
            <input
              className="form-control email"
              type="text"
              placeholder="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email ? (
              <p className="text__warning">{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="password__form form-group">
            <p>Password</p>
            <div className="pass__input">
              <input
                className="password form-control"
                placeholder="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={passwordShown ? "text" : "password"} autoComplete="true"  required={true}
              />
              <span className="show__eye" onClick={toggle}  >
                {passwordShown ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i> }
              </span>
            </div>
            {formik.errors.password ? (
              <p className="text__warning">{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className="login__sub">
            <div className="login__register">
              <NavLink className="nav__regis" to="/register">
                Register now?
              </NavLink>
            </div>
            <div className="button__login">
              <button className="btn__login" type="submit">
                Login
              </button>
            </div>
          </div>
          <div className="login__facebook">
            <button className="btn__facebook">
              <i className="fab fa-facebook-f"></i>
              <p className="face__content">Continue with Facebook</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
