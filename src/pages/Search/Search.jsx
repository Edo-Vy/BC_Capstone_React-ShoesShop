// rfc
import React from "react";

export default function Search() {
  return (
    <div className="search">
      <div className="main__wrap">
        <div className="search__header">
          <form className="main__search">
            <div className="main__right form-group">
              <p className="search__title">Search</p>
              <input
                className="search__form form-control"
                placeholder="Search Product"
                name="search"
              />
            </div>
            <div className="main__left">
              <button className="btn__search">Search</button>
            </div>
          </form>
        </div>
        {/* ---- */}
        <div className="search__result">
          <div className="body__wrap">
            <div className="body__title">
              <h3 className="title">Search result</h3>
            </div>
            <div className="body__option">
              <div className="search__price ">
                <p className="price__title">Price</p>
                <div className="price__button">
                  <button className="btn__decrease">decrease</button>
                  <button className="btn__ascending">ascending</button>
                </div>
              </div>
              <div className="option__branchs">
                <p className="branch__title">Branchs</p>
                <select className="select__branchs">
                  <option>Adidas</option>
                  <option>Vans</option>
                  <option>Nike</option>
                </select>
              </div>
            </div>
            {/* === */}
            <div className="search__product">
              <div className="row">
                <div>Call api</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
