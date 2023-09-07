import React from "react";
import { NavLink } from "react-router-dom";
import Product from '../../components/Product/Product'
export default function Home() {
  return (
    <div>
      {/* carousel */}
      <section classname="carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators carousel__circle">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="carousel__circleItem active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="carousel__circleItem"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="carousel__circleItem"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel__left">
                <img src="./img/adidas.png" className="" alt="..." />
              </div>
              <div className="carousel__right">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <NavLink className="btn__buynow">Buy Now</NavLink>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel__left">
                <img src="./img/adidas.png" className="" alt="..." />
              </div>
              <div className="carousel__right">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <NavLink className="btn__buynow">Buy Now</NavLink>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel__left">
                <img src="./img/adidas.png" className="" alt="..." />
              </div>
              <div className="carousel__right">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
                <NavLink className="btn__buynow">Buy Now</NavLink>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
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
            {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
            <img
              className="polygon-2"
              src="./img/Polygon 1.png"
              aria-hidden="true"
              alt="..."
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Product */}
      <section className="product">
        <div className="container">
          <h3>Product Feture</h3>

          <div className="row">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
          </div>
        </div>
      </section>
    </div>
  );
}
