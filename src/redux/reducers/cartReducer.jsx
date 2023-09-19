import { createSlice } from "@reduxjs/toolkit";
import { history } from "../..";
import { getStoreJSON, http, USER_LOGIN } from "../../util/config";
import { getProfileApi } from "./userReducer";

const initialState = {
  listCartTemp: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    setOrderUserAction: (state, action) => {
      state.listCartTemp = action.payload;
    },
    addToCartAction: (state, action) => {
      if (!getStoreJSON(USER_LOGIN)) {
        alert("Vui lòng đăng nhập!");
        history.push("/login");
      }
      // bóc tách phần tử
      let { listCartTemp } = state;
      let { payload } = action;
      let index = listCartTemp.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        //neu da co thi tien hanh tang so luong len
        listCartTemp[index] = {
          ...listCartTemp[index],
          useNumber: listCartTemp[index].useNumber + payload.useNumber,
        };
      } else {
        //neu chua co thi add moi vao
        listCartTemp = [...listCartTemp, payload];
      }
      //update vao state
      state.listCartTemp = listCartTemp;
      // if (state.listCartTemp = listCartTemp){ alert('Thêm thành công') }
      console.log("listCartTemp", listCartTemp);
    },
    changeQuantityAction: (state, action) => {
      let index = state.listCartTemp.findIndex(
        (item) => item.id === action.payload[1]
      );
      if (index !== -1) {
        state.listCartTemp[index].useNumber += action.payload[0];
      }
    },
    handleDeleteAction: (state, action) => {
      let itemCartDel = state.listCartTemp.filter(
        (item) => item.id !== action.payload
      );
      state.listCartTemp = itemCartDel;
    },
    submitOrderAction: (state, action) => {
      let newListCarts = [...state.listCartTemp];
      
      action.payload.orderDetail.forEach((i, index) => {
        newListCarts = newListCarts.filter(item => item.id !== i.prodId);
        console.log("newListCart", newListCarts);
      });
      
      state.listCartTemp = newListCarts;
    
      
    },
    checkAllItem: (state, action) => {
      let { listCartTemp } = state;
      let { payload } = action;
      for (const key in listCartTemp) {
        listCartTemp[key] = {
          ...listCartTemp[key],
          checked: payload,
        };
      }
      state.listCartTemp = listCartTemp;
    },
    checkItem: (state, action) => {
      let { listCartTemp } = state;
      const { payload } = action;
      const index = listCartTemp.findIndex((item) => item.id === payload);
      if (index !== -1) {
        listCartTemp[index] = {
          ...listCartTemp[index],
          checked: !listCartTemp[index].checked,
        };
      }
      state.listCartTemp = listCartTemp;
    },
  },
});

export const {
  addToCartAction,
  changeQuantityAction,
  handleDeleteAction,
  setOrderUserAction,
  checkAllItem,
  checkItem,
  submitOrderAction,
} = cartReducer.actions;

export default cartReducer.reducer;

//-------
export const getApiOrderAction = (order) => {
  return async (dispatch) => {
    try {
      let result = await http.post("/Users/order", order);
      console.log("Thành công", result);
      alert("Đã đặt hàng thành công!");
      const action = submitOrderAction(order);
      dispatch(action);
      console.log("submit", action);
      // kiểm tra
      const action_api = getProfileApi;
      dispatch(action_api);
      console.log("api", action_api);

      // đã đăng nhập
    } catch (erro) {
      console.log("erro", erro);
      alert("Vui lòng đăng nhập");
      history.push("/login");
    }
  };
};
//---- login
export const getUserLogin = () => {
  return async (dispatch) => {
    try {
      if (!getStoreJSON(USER_LOGIN)) {
        alert("Vui lòng đăng nhập để vào trang này!");
        history.push("/login");
      }
      return null;
    } catch (erro) {
      console.log(erro);
    }
  };
};
