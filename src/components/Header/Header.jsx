// rfc
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
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
                    src="./img/cart.png"
                    style={{ cursor: "pointer" }}
                    alt="cart"
                  />
                  <span>1</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="header__login p-3" to="/">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="header__register p-3" to="/">
                  Register
                </NavLink>
              </li>
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
