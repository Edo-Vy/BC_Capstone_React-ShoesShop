//rfc
import React from "react";

export default function Cart() {
  return (
    <div className="cart">
      <h3 className="cart__title">Cart</h3>
      <div className="cart__wrap">
        <table className="cart__table">
          <thead className="thead">
            <tr>
              <th>
                <input type={"checkbox"} className="checkbox" id="check" />
              </th>
              <th>Id</th>
              <th>IMG</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>ToTal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr>
              <td className="cart__check">
                <input type={"checkbox"} className=" checkbox" id="check" />
              </td>
              <td className="cart__id">01</td>
              <td className="cart__img">
                <img src="https://i.pravatar.cc?u=9" alt="" />
              </td>
              <td className="cart__name">Product Name</td>
              <td className="cart__price">356 $</td>
              <td className="cart__quantity">
                <button className="btn__down">-</button>
                <span className="count__total">1</span>
                <button className="btn__plus">+</button>
              </td>
              <td className="cart__total">100000</td>
              <td className="cart__action">
                <button className="btn__edit">EDIT</button>
                <button className="btn__del">DELETE</button>
              </td>
            </tr>
          </tbody>

          <tfoot className="tfoot">
            <tr>
              <td>
                <button className="btn__subOrder">SUBMIT ORDER</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
