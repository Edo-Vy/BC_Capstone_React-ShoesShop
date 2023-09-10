import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listCartTemp: [],
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      // bóc tách phần tử
      let { listCartTemp } = state;
      let { payload } = action;
      let index = listCartTemp.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        // nếu đã có thì tăng số lượng lên
        listCartTemp[index] = {
          ...listCartTemp[index],
          Number: listCartTemp[index].Number + payload.Number,
        };
      } else {
        // nếu chưa có thì add vào
        listCartTemp = [...listCartTemp, payload];
      }
      // update vao state
      state.listCartTemp = listCartTemp;
      console.log("listTemp", listCartTemp);
    },
    changeQuantityAction: (state, action) => {
      let index = state.listCartTemp.findIndex(
        (item) => item.id === action.payload[1]
      );
      if (index !== -1) {
        state.listCartTemp[index].Number += action.payload[0];
      }
    },
    handleDeleteAction : (state, action) =>{
       let itemCartDel = state.listCartTemp.filter(item => item.id !== action.payload);
       state.listCartTemp = itemCartDel;
    }
    
  },
});

export const { addToCartAction, changeQuantityAction, handleDeleteAction } = cartReducer.actions;

export default cartReducer.reducer;
