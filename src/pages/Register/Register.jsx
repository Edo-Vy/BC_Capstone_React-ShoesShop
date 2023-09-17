//rfc
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getNewUserSignUp } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

export default function Register() {
  // show and hide password
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();
  const [gender, setGender] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: gender,
      phone: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống!")
        .email("Email không đúng định dạng!"),
      password: Yup.string()
        .required("Mật khẩu không được để trống!")
        .min(3, "Mật khẩu từ 3 - 32 ký tự")
        .max(32, "Mật khẩu từ 3 -32 ký tự"),
      passconfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Nhập lại mật khẩu không đúng !")
        .required("Mật khẩu không được để trống!"),
      name: Yup.string().required("Tên không được để trống!"),
      phone: Yup.string()
        .required("Số điện thoại không được để trống!")
        .matches(/^[0-9]+$/, "Chỉ được nhập số")
        .min(10, " Số điện thoại từ 10 - 11 số")
        .max(11, " Số điện thoại từ 10 - 11 số"),
    }),
    onSubmit: (values) => {
      console.log(values);

      const action = getNewUserSignUp(values);
      dispatch(action);
    },
  });
  // handleChangeIcon
 
  const toggle = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="register" onSubmit={formik.handleSubmit}>
      <div className="main__wrap">
        <div className="res__title">
          <h3 className="title">Resgister</h3>
        </div>
        <div className="res__form">
          <form className="form__wrap">
            <div className="form__left">
              <div className="emai__form form-group">
                <p className="email__title">Email</p>
                <input
                  className="email form-control"
                  placeholder="name@gmail.com"
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
              <div className="pass__form form-group">
                <p className="pass__title">Password</p>
                <div className="pass__input">
                  <input
                    className="password form-control"
                    placeholder="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type={passwordShown ? "text" : "password"}
                    autoComplete="true"
                    required={true}
                  />
                  <span className="show__icon" onClick={toggle}>
                    {passwordShown ? (
                      <i className="fa fa-eye"></i>
                    ) : (
                      <i className="fa fa-eye-slash"></i>
                    )}
                  </span>
                </div>
                {formik.errors.password ? (
                  <span className="text__warning">
                    {formik.errors.password}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="passconf__form form-group">
                <p className="passconf__title">Password confirm</p>
                <div className="pass__input">
                  <input
                    className="passconf form-control"
                    placeholder="password confirm"
                    name="passconfirm"
                    autoComplete="true"
                    required={true}
                    type={passwordShown ? "text" : "password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span className="show__icon" onClick={toggle}>
                    {passwordShown ? (
                      <i className="fa fa-eye"></i>
                    ) : (
                      <i className="fa fa-eye-slash"></i>
                    )}
                  </span>
                </div>
                {formik.errors.passconfirm ? (
                  <span className="text__warning">
                    {formik.errors.passconfirm}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="form__right">
              <div className="name__form form-group">
                <p className="name__title">Name</p>
                <input
                  className="name form-control"
                  placeholder="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name ? (
                  <span className="text__warning">{formik.errors.name}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="phone__form form-group">
                <p className="phone__title">Phone</p>
                <input
                  className="phone form-control"
                  placeholder="your phone number"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone ? (
                  <span className="text__warning">{formik.errors.phone}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="gender__form form-group">
                <p className="gender__title">Gender</p>
                <div className="gender__check">
                  <div className="male__check">
                    <input
                      id="radio-male"
                      name="gender"
                      type="radio"
                      className="male__raddio"
                      value={true}
                      checked={gender ? true : false}
                      onChange={() => setGender(true)}
                    />
                    <label className="male__title" htmlFor="radio-male">
                      Male
                    </label>
                  </div>
                  <div className="female__check">
                    <input
                      id="radio-female"
                      name="gender"
                      type="radio"
                      className="female__raddio"
                      value={false}
                      checked={gender ? true : false}
                      onChange={() => setGender(true)}
                    />
                    <label className="female__title" htmlFor="radio-female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="button__submit">
                <button className="btn__submit" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
