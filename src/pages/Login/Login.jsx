//rfc
import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="login__title">
        <h3>Login</h3>
      </div>
      <div className="login__form">
        <form className="form__wrap">
          <div className="email__form form-group">
            <p>Email</p>
            <input
              className="form-control email"
              type="text"
              placeholder="email"
              id="email"
              name="email"
            />
          </div>
          <div className="password__form form-group">
            <p>Password</p>
            <input
              className="password form-control"
              placeholder="password"
              id="password"
              name="password"
            />
          </div>
          <div className="login__sub">
            <div className="login__register">
              <h3 className="nav__regis">Register now?</h3>
            </div>
            <div className="button__login">
              <button className="btn__login">Login</button>
            </div>
          </div>
          <div className="login__facebook">
            <button className="btn__facebook">
            <i className="fab fa-facebook-f"></i>
              <p  className="face__content">Continue with Facebook</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
