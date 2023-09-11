//rfc
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../redux/reducers/userReducer";

export default function Profile() {
  // Lấy thông tin userLogin
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getProfileApi();
    dispatch(action);
  }, []);
  return (
    <div className="profile">
      <div className="profile__wrap">
        <div className="prof__main">
          <div className="prof__title">
            <h3>Profile</h3>
          </div>
          <div className="prof__info">
            <div className="info__wrap">
              <div className="info__avatar">
                <img src="http://i.pravatar.cc?=9" alt="" />
              </div>
              <div className="info__form">
                <form className="form__wrap">
                  <div className="form__left">
                    <div className="emai__form from-group">
                      <p className="email__title">Email</p>
                      <input
                        className="form-control email"
                        placeholder="email"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="phone__form from-group">
                      <p className="phone__title">Phone</p>
                      <input
                        className="form-control phone"
                        placeholder="phone"
                        id="phone"
                        name="phone"
                      />
                    </div>
                  </div>
                  {/* ---- */}
                  <div className="form__right">
                    <div className="name__form from-group">
                      <p className="name__title">Name</p>
                      <input
                        className="form-control name"
                        placeholder="name"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="password__form from-group">
                      <p className="password__title">Password</p>
                      <input
                        className="form-control password"
                        placeholder="password"
                        id="password"
                        name="password"
                      />
                    </div>
                    <div className="form__check">
                      <div className="gender__form">
                        <p className="gender__title">Gender</p>
                        <div className="gender__check">
                          <div className="gender__male">
                            <input
                              className="male__check"
                              type="radio"
                              name="male"
                              id="male"
                            />
                            <p className="male__title">Male</p>
                          </div>
                          <div className="gender__female">
                            <input
                              className="female__check"
                              type="radio"
                              name="female"
                              id="female"
                            />
                            <p className="female__title">Female</p>
                          </div>
                        </div>
                      </div>
                      <div className="button__up">
                        <button className="btn__update">Update</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* -------- nav----------- */}

        <div className="prof__pro">
          <div className="prof__pro__main">
            <div className="prof__history">
              <div className="button__history">
                <button className="btn__history">Order History</button>
              </div>
              <div className="table__history"></div>
            </div>
            <div className="prof__favo">
              <div className="button__favo">
                <button className="btn__favo">Favourite</button>
              </div>
              <div className="table__favo"></div>
            </div>
          </div>
        </div>
        {/* -------------------- */}
      </div>
    </div>
  );
}
