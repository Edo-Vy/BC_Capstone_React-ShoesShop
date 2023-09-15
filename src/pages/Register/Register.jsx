//rfc
import React from "react";

export default function Register() {
  return (
    <div className="register">
      <div className="main__wrap">
        <div className="res__title">
          <h3 className="title">Resgister</h3>
        </div>
        <div className="res__form">
          <form className="form__wrap">
            <div className="form__left">
              <div className="emai__form form-group">
                <p className="email__title">Email</p>
                <input className="email form-control" name="email" />
              </div>
              <div className="pass__form form-group">
                <p className="pass__title">Password</p>
                <input className="password form-control" name="password" />
              </div>
              <div className="passconf__form form-group">
                <p className="passconf__title">Password confirm</p>
                <input className="passconf form-control" name="passconf" />
              </div>
            </div>
            <div className="form__right">
              <div className="name__form form-group">
                <p className="name__title">Name</p>
                <input className="name form-control" name="name" />
              </div>
              <div className="phone__form form-group">
                <p className="phone__title">Phone</p>
                <input className="phone form-control" name="phone" />
              </div>
              <div className="gender__form form-group">
                <p className="gender__title">Gender</p>
                <div className="gender__check">
                  <div className="male__check">
                    <input type="radio" className="male__raddio"/>
                    <p className="male__title">Male</p>
                  </div>
                  <div className="female__check">
                    <input type="radio" className="female__raddio"/>
                    <p className="female__title">Female</p>
                  </div>
                </div>
              </div>
              <div className="button__submit">
                <button className="btn__submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
