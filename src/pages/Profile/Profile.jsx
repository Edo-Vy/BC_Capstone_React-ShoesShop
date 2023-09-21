//rfc

import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  getProdFavoriteApi,
  getProfileApi,
  getUpdateUserApi,
} from "../../redux/reducers/userReducer";
import OrderFavourite from "./OrderFavourite/OrderFavourite";
import OrderHistory from "./OrderHistory/OrderHistory";

export default function Profile() {
 
  // Lấy thông tin userLogin
  const { userLogin } = useSelector((state) => state.userReducer);
  const { arrProdFavorite } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
   // update profile
   const formik = useFormik({
    initialValues: {
      email: userLogin?.email,
      name: userLogin?.name,
      phone: userLogin?.phone,
      password: userLogin?.password,
      gender: userLogin?.gender,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Tên cập nhật"),
      phone: Yup.string()
        .required("Số điện thoại cần cập nhật")
        .matches(/^[0-9]+$/, "Chỉ được nhập số")
        .min(10, "Số điện thoại từ 10 - 11 số")
        .max(11, "Số điện thoại từ 10 - 11 số"),
    }),
    onSubmit : ( values) =>{
      let {email, name, phone, password, gender } = values;
      let userUpdate = {
        ...userLogin,
        ...(email && {email}),
        ...(name && {name}),
        ...(phone && {phone}),
        ...(password && {password}),
        ...(gender === null || gender === undefined ? {} : {gender}),
      }
      const action = getUpdateUserApi(userUpdate);
      dispatch(action);
      console.log('up',action);
      
    }
  });
  //show checck
  const [isShown, setIsShown] = useState(true);
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
                <form className="form__wrap" onSubmit={formik.handleSubmit}>
                  <div className="form__left">
                    <div className="emai__form from-group">
                      <p className="email__title">Email</p>
                      <input
                        className="form-control email"
                        placeholder="email"
                        id="email"
                        name="email"
                        defaultValue={userLogin?.email} disabled
                  
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.phone ? <span className="text__warning">{formik.errors.phone}</span> : ''}
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.name ? <span className="text__warning">{formik.errors.name}</span> : ''}

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
                              onChange={formik.handleChange}
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
                              onChange={formik.handleChange}
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
                        <button className="btn__update" type="submit">Update</button>
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
