//rfc
import React from "react";
import { NavLink } from "react-router-dom";

export default function Product({product}) {

  return (
    <div>
        <div className="card__pro">
          <div className="card__img">
            <img src={product.image} alt="" />
            <div className="product__heart">
              <i className="fa fa-heart"></i>
            </div>
          </div>
          <div className="card__title">
            <h3>{product.name.length > 18 ? product.name.slice(0,18) +'...' : product.name}</h3>
            <p>{product.shortDescription.length > 50 ? product.shortDescription.slice(0,50) +'...' : product.shortDescription}</p>
          </div>
          <div className="card__des">
            <NavLink className="btn__add" to={`/detail/${product.id}`}>Buy Now</NavLink>
            <p>{product.price}$</p>
          </div>
        </div>
    </div>
  );
}
