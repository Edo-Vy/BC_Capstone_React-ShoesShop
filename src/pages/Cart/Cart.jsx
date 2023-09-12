//rfc
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantityAction,
  handleDeleteAction,
} from "../../redux/reducers/cartReducer";

export default function Cart() {
  const { listCartTemp } = useSelector((state) => state.cartReducer);
  console.log("list", listCartTemp);
  const dispatch = useDispatch();

  // changeQuantity
  const handleChangeQuantity = (number, id) => {
    const action = changeQuantityAction([number, id]);
    dispatch(action);
  };
  // handleDeleteItemcart
  let handleDelItemCart = (id) => {
    const action = handleDeleteAction(id);
    dispatch(action);
  };
  // findCheckAll
  const findIfCheckAll = () => {
    let result = true;
    for (let value of listCartTemp) {
      if (!value.checked == false) result &= false;
    }
    return result;
  };
  // handleCheckAll
  const handleCheckAll = ({ target: { checked } }) => {};

  return (
    <div className="cart">
      <h3 className="cart__title">Cart</h3>
      <div className="cart__wrap">
        <table className="cart__table">
          <thead className="thead">
            <tr>
              <th className="t__check">
                <input
                  type={"checkbox"}
                  className="checkbox"
                  id="check"
                  name="check"
                />
              </th>
              <th>Id</th>
              <th>IMG</th>
              <th>Name</th>
              <th>Price</th>
              <th className="th__quantity">Quantity</th>
              <th className="th__total">ToTal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {listCartTemp.map((prod, index) => {
              return (
                <tr key={index}>
                  <td className="cart__check">
                    <input
                      type={"checkbox"}
                      className=" checkbox"
                      id="check"
                      name="check"
                    />
                  </td>
                  <td className="cart__id">{prod.id}</td>
                  <td className="cart__img">
                    <img src={prod.image} alt="" />
                  </td>
                  <td className="cart__name">{prod.name}</td>
                  <td className="cart__price">{prod.price} $</td>
                  <td className="cart__quantity">
                    <button
                      className="btn__down"
                      onClick={() => {
                        if (prod.useNumber <= 1) {
                          if (
                            window.confirm(
                              `Bạn có muốn xóa sản phẩm ${prod.name}`
                            )
                          ) {
                            handleDelItemCart(prod.id);
                          }
                        } else {
                          handleChangeQuantity(-1, prod.id);
                        }
                      }}
                    >
                      -
                    </button>
                    <span className="count__total">{prod.useNumber}</span>
                    <button
                      className="btn__plus"
                      onClick={() => {
                        handleChangeQuantity(1, prod.id);
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td className="cart__total">{prod.price * prod.useNumber}</td>
                  <td className="cart__action">
                    <button className="btn__edit">EDIT</button>
                    <button className="btn__del" onClick={()=>{
                      if(window.confirm(`Bạn có muốn xóa sản phẩm ${prod.name}`)){
                        handleDelItemCart(prod.id);
                      }
                    }}>DELETE</button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot className="tfoot">
            <tr>
              <td colSpan={8}>
                <button className="btn__subOrder">SUBMIT ORDER</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
