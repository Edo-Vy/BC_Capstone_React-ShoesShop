//rfc
import React from "react";
// import moment from "moment";

export default function OrderFavourite({ order }) {
  return (
    <>
      <td className="ord__id">{order?.id}</td>
      <td className="ord__img">
        <img src={order?.image} alt="" />
      </td>
      <td className="ord__name">{order?.name}</td>
    </>
  );
}
