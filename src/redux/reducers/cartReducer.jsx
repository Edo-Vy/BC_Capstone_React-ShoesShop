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
          //neu da co thi tien hanh tang so luong len
          listCartTemp[index] = {
              ...listCartTemp[index],
              useNumber: listCartTemp[index].useNumber + payload.useNumber,
          };
      } else {
          //neu chua co thi add moi vao
          listCartTemp = [...listCartTemp, payload]
      };
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
    handleDeleteAction : (state, action) =>{
       let itemCartDel = state.listCartTemp.filter(item => item.id !== action.payload);
       state.listCartTemp = itemCartDel;
    }
    
  },
});

export const { addToCartAction, changeQuantityAction, handleDeleteAction } = cartReducer.actions;

export default cartReducer.reducer;
