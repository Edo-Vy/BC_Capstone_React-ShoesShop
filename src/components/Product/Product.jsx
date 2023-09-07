//rfc
import React from "react";

export default function Product() {
  return (
    <div>
      <div className="">
        <div className="card">
          <div className="card__img">
            <img src="./img/adidas.png" alt="" />
            <div className="product__heart">
              <i class="fa fa-heart"></i>
            </div>
          </div>
          <div className="card__title">
            <h3>Product Name</h3>
            <p>Description</p>
          </div>
          <div className="card__des">
            <button className="btn__add">Add to cart</button>

            <p>Price</p>
          </div>
        </div>
      </div>
    </div>
  );
}
