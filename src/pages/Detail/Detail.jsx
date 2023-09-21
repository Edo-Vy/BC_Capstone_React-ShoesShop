//rfc
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import { addToCartAction } from "../../redux/reducers/cartReducer";
import { getApiProDetailAction } from "../../redux/reducers/productReducer";


export default function Detail() {

  const { proDetail } = useSelector((state) => state.productReducer);
  //changenumber
  const [useNumber, setUseNumber] = useState(1);
  // changeSize
  const [size, setSize] = useState("36");
  const params = useParams();
  const dispatch = useDispatch();
 
  useEffect(() => {
    const action = getApiProDetailAction(params.id);
    dispatch(action);
  }, [params.id]);
  // changeQuatity
  const handleChangeQuantity = (number) => {
    if (useNumber < 2 && number === -1) {
     return alert("Số lượng tối thiểu là 1");
    }

    setUseNumber(useNumber + number);
  };
  const handleChangeCart = () => {
    const action = addToCartAction({...proDetail, useNumber});
    dispatch(action);
   
    // console.log("kết quả", action);
    // console.log('Number', useNumber);
  
  };
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
            {proDetail?.size?.map((sizeNum, index) => {
              return (
                <button className={ ( size === sizeNum ?  "btn__size-active":  "btn__size" )} key={index} onClick={()=>{
                  setSize(sizeNum)
                }}>
                  <span>{sizeNum}</span>
                </button>
              );
            })}
          </div>
          <p className="card__price">{proDetail.price}$</p>
          <div className="count__prod">
            <button
              className="count__down"
              onClick={() => {
                handleChangeQuantity(-1);
              }}
            >
              -
            </button>
            <p className="count__total">{useNumber}</p>
            <button
              className="count__plus"
              onClick={() => {
                handleChangeQuantity(1);
              }}
            >
              +
            </button>
          </div>
          <button className="btn__cart" onClick={handleChangeCart}>
            Add to cart
          </button>
        </div>
      </div>

      {/* --------- */}
      <div className="product">
        <h3>-Realate Product -</h3>
        <div className="product__wrap">
          <div className="row ">
            {proDetail?.relatedProducts?.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
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
