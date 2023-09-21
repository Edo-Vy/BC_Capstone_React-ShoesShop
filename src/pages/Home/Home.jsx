import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Product from "../../components/Product/Product";
import { getApiProductAction } from "../../redux/reducers/productReducer";

export default function Home() {
  //  slick

  // Lấy dữ liệu từ redux
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  // render ra giao diện
  useEffect(() => {
    const action = getApiProductAction();
    dispatch(action);
  }, []);
  return (
    <div>
      {/*  */}
      <div className="carousel">
        <div className="carousel-overflow overflow-hidden container">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-overflow overflow-hidden">
                <div className="carousel-item active">
                  <div className="card__left">
                    <img
                      src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
                      alt=""
                    />
                  </div>
                  <div className="card__right">
                    <h5>Adidas Prophere</h5>
                    <p>
                      The adidas Primeknit upper wraps the foot with a
                      supportive fit that enhances movement
                    </p>
                    <NavLink className="btn btn__buy">Buy Now</NavLink>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card__left">
                    <img
                      src="https://shop.cyberlearn.vn/images/adidas-super-star-red.png"
                      alt=""
                    />
                  </div>
                  <div className="card__right">
                    <h5>Adidas Super Star Red</h5>
                    <p>
                      The adidas Primeknit upper wraps the foot with a
                      supportive fit that enhances movement
                    </p>
                    <NavLink className="btn btn__buy">Buy Now</NavLink>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card__left">
                    <img
                      src="https://shop.cyberlearn.vn/images/adidas-yeezy-350.png"
                      alt=""
                    />
                  </div>
                  <div className="card__right">
                    <h5>Adidas Yeezy 350</h5>
                    <p>
                      The adidas Primeknit upper wraps the foot with a
                      supportive fit that enhances movement
                    </p>
                    <NavLink className="btn btn__buy" >Buy Now</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <img
              className="polygon-1"
              src="./img/Polygon 2.png"
              aria-hidden="true"
              alt="..."
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <img
              className="polygon-2"
              src="./img/Polygon 1.png"
              aria-hidden="true"
              alt="..."
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Product */}
      <div className="product">
        <div className="container">
          <h3 className="product__title">Product Feature</h3>

          <div className="row ">
            {arrProduct.map((prod, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <Product product={prod} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
