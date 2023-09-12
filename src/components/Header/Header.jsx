// rfc
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ACCESS_TOKEN, clearCookie, clearLocalStorage, sl, USER_LOGIN } from "../../util/config";

export default function Header() {
  const { listCartTemp } = useSelector((state) => state.cartReducer);
  // const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.userReducer);

  const renderLogin = () => {
    if (userLogin) {
      return (
        <>
          <li>
            <NavLink className="nav-link header__login p-3 active" to="/profile">
              Hello! {userLogin.email}
            </NavLink>
          </li>
          <li>
            <NavLink className="header__login p-3" to="/" style={{cursor:"pointer"}} onClick={()=>{
              clearLocalStorage(USER_LOGIN);
              clearLocalStorage(ACCESS_TOKEN);
              clearCookie(USER_LOGIN);
              clearCookie(ACCESS_TOKEN);
              window.location.href = "/"; // clear redux
            }}>
              Đăng Xuất
            </NavLink>
          </li>
        </>
      );
    }
    return (
      <>
        <li>
          <NavLink className="header__login p-3" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="header__register p-3" to="/">
            Register
          </NavLink>
        </li>
      </>
    );
  };
  return (
    <>
      <div className="header__main">
        <div className="container-fluid">
          <NavLink className="header__logo" to="/">
            <img src="./img/logocyber.png" alt="" />
          </NavLink>
          <div className="header__content">
            <ul className="d-flex">
              <li>
                <NavLink className="header__search p-3" to="/">
                  <i className="fa fa-search"></i>
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink className="header__carts p-3" to="/cart">
                  <img
                    src="../img/cart.png"
                    style={{ cursor: "pointer" }}
                    alt="cart"
                  />
                  <span>({sl(listCartTemp, "useNumber")}
                  
                  )</span>
                </NavLink>
              </li>
              {renderLogin()}
            </ul>
          </div>
        </div>
      </div>
      {/* ===== */}
      <div className="header__menu">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <div className="menu__wrap">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav__menu">
                  <NavLink
                    className="nav-link active nav__link"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink className="nav-link  nav__link" href="/">
                    Men
                  </NavLink>
                  <NavLink className="nav-link  nav__link" href="/">
                    Woman
                  </NavLink>
                  <NavLink className="nav-link  nav__link" href="/">
                    Kid
                  </NavLink>
                  <NavLink className="nav-link  nav__link" href="/">
                    Sport
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
