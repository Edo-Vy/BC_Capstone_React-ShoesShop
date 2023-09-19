//rfc
import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { date } from "yup";
import {
  getProdFavoriteApi,
  getProfileApi,
} from "../../redux/reducers/userReducer";
import OrderFavourite from "./OrderFavourite/OrderFavourite";
import OrderHistory from "./OrderHistory/OrderHistory";

export default function Profile() {
  // Lấy thông tin userLogin
  const { userLogin } = useSelector((state) => state.userReducer);
  const { arrProdFavorite } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  //show checck
  const [isShown, setIsShown] = useState(false);
  const [isShownLike, setIsShownLike] = useState(false);



  const handleClick = (e) => {
    setIsShown((current) => !current);
    setIsShownLike(false);
    //  or simply set it to true
    // setIsShown(true);
  };

  const handleClickLike = (e) => {
    setIsShownLike((current) => !current);
    setIsShown(false);
    //  or simply set it to true
    // setIsShown(true);
  };

  useEffect(() => {
    const action = getProfileApi();
    dispatch(action);
  }, []);

  useEffect(() => {
    const action = getProdFavoriteApi();
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
                <img src={userLogin?.avatar} alt="" />
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
                        defaultValue={userLogin?.email}
                      />
                    </div>
                    <div className="phone__form from-group">
                      <p className="phone__title">Phone</p>
                      <input
                        className="form-control phone"
                        placeholder="phone"
                        id="phone"
                        name="phone"
                        defaultValue={userLogin?.phone}
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
                        defaultValue={userLogin?.name}
                      />
                    </div>
                    <div className="password__form from-group">
                      <p className="password__title">Password</p>
                      <input
                        className="form-control password"
                        placeholder="password"
                        id="password"
                        name="password"
                        defaultValue={userLogin?.password}
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
                              name="gender"
                              id="radio-male"
                              value={true}
                              defaultChecked={userLogin?.gender}
                            />
                            <label className="male__title" htmlFor="radio-male">
                              Male
                            </label>
                          </div>
                          <div className="gender__female">
                            <input
                              className="female__check"
                              type="radio"
                              name="gender"
                              id="radio-female"
                              defaultChecked={!userLogin?.gender}
                              value={false}
                            />
                            <label
                              className="female__title"
                              htmlFor="radio-female"
                            >
                              Female
                            </label>
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
                <button className="btn__history" onClick={handleClick}>
                  Order History
                </button>
                {isShown && (
                  <div className="table__history">
                    {userLogin?.ordersHistory?.map((order, index) => {
                      return (
                        <div className="table__order-history" key={index}>
                          <OrderHistory order={order} />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div></div>
            </div>
            <div className="prof__favo">
              <div className="button__favo">
                <button className="btn__favo" onClick={handleClickLike}>
                  Favourite
                </button>
                {isShownLike && (
                  <div className="table__favou">
                    <div className="table__order-favou">
                      <table className="table__wrap">
                        <thead className="tb__head">
                          <tr>
                            <th>Id</th>
                            <th>IMG</th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="tb__body">
                          {arrProdFavorite?.productsFavorite?.map(
                            (like, index) => {
                              return (
                                <tr key={index}>
                                  <OrderFavourite order={like} />
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* -------------------- */}
      </div>
    </div>
  );
}
