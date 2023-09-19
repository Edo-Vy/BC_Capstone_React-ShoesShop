//rfc
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";
import { history } from "../..";
import {
  getProdLikeAction,
  getProdUnLikeAction,
} from "../../redux/reducers/userReducer";
import { getStoreJSON, USER_LOGIN } from "../../util/config";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const [like, setLike] = useState(false);
  const [idProdLike, setIdProductLike] = useState(product.id);

  const handleChangeLike = () => {
    if (!getStoreJSON(USER_LOGIN)) {
      alert("Vui lòng đăng nhập!");
      history.push("/login");
    }
    if (!like) {
      setIdProductLike(product?.id);
      const action = getProdLikeAction(idProdLike);
      dispatch(action);
      console.log("like", action);

      return setLike(true);
    } else if (like) {
      setIdProductLike(product?.id);
      const action = getProdUnLikeAction(idProdLike);
      dispatch(action);

      return setLike(false);
    }
  };

  return (
    <div>
      <div className="card__pro">
        <div className="card__img">
          <img src={product.image} alt="" />
          <div className="product__heart">
            <button
              className="button__heart"
              onClick={() => {
                handleChangeLike();
              }}
            >
              {like ? (
                <i className="fa fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </button>
          </div>
        </div>
        <div className="card__title">
          <h3>
            {product.name.length > 18
              ? product.name.slice(0, 18) + "..."
              : product.name}
          </h3>
          <p>
            {product.shortDescription.length > 50
              ? product.shortDescription.slice(0, 50) + "..."
              : product.shortDescription}
          </p>
        </div>
        <div className="card__des">
          <NavLink className="btn__add" to={`/detail/${product.id}`}>
            Buy Now
          </NavLink>
          <p>{product.price}$</p>
        </div>
      </div>
    </div>
  );
}
