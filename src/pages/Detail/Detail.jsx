//rfc
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import { getApiProDetailAction } from "../../redux/reducers/productReducer";

export default function Detail(props) {
  const { proDetail } = useSelector((state) => state.productReducer);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getApiProDetailAction(params.id);
    dispatch(action);
  }, [params.id]);
  return (
    <div>
      <div className="card__detail">
        <div className="card__left">
          <img src={proDetail.image} alt="" />
          <div className="card__heart">
            <i className="fa fa-heart"></i>
          </div>
        </div>
        <div className="card__right">
          <h2>{proDetail.name}</h2>
          <p className="card__shortdes">{proDetail.shortDescription}</p>
          <h3>Available size</h3>
          <div className="button__size">
            {proDetail?.size?.map((size, index) => {
              return (
               
                  <span className="btn__size" key={index}>
                    {size}
                  </span>
               
              );
            })}
            {/* <button className="btn__size">38</button>
            <button className="btn__size">38</button>
            <button className="btn__size">38</button>
            <button className="btn__size">38</button>
            <button className="btn__size">38</button> */}
          </div>
          <p className="card__price">{proDetail.price}$</p>
          <div className="count__prod">
            <button className="count__down">-</button>
            <p className="count__total">1</p>
            <button className="count__plus">+</button>
          </div>
          <button className="btn__cart">Add to cart</button>
        </div>
      </div>

      {/* --------- */}
      <div className="product">
        <h3>-Realate Product -</h3>
        <div className="product__wrap">
          <div className="row">
            {proDetail?.relatedProducts?.map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <Product product={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
