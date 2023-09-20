//rfc
import React, { useEffect, useState } from "react";
import moment from "moment";
import { deleleOrderApi } from "../../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

export default function OrderHistory({ order }) {
  const [idProd, setIdProd] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (idProd) {
      const action = deleleOrderApi(idProd);
      dispatch(action);
    }
  }, [idProd]);
  return (
    <>
      <p className="ord__date">+ {moment(order?.date).format("DD/MM/YYYY")}</p>
      <table className="table__wrap">
        <thead className="tb__head">
          <tr>
            <th>Id</th>
            <th>IMG</th>
            <th>Name</th>
            <th>Price</th>
            <th className="th__quantity">Quantity</th>
            <th className="th__total">ToTal</th>
            <th>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setIdProd({ orderId: order?.id });
                }}
              >
                DELETE
              </button>
            </th>
          </tr>
        </thead>
        <tbody className="tb__body">
          {order?.orderDetail?.map((item, index) => {
            return (
              <tr key={index}>
                <td className="ord__id">{order?.id}</td>
                <td className="ord__img">
                  <img src={item?.image} alt="" />
                </td>
                <td className="ord__name">{item?.name}</td>
                <td className="ord__price">{item?.price}</td>

                <td className="ord__quantity">{item?.quantity}</td>
                <td className="ord__total">{item?.price * item?.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
