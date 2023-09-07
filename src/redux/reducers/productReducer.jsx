import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";

const initialState = {
  arrProduct: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      // Lấy dữ liệu từ payload lên action
      const arrProducts = action.payload;
      state.arrProduct = arrProducts;
    },
  },
});

export const { setArrProductAction } = productReducer.actions;

export default productReducer.reducer;

// ------------ get api -----------

export const getApiProductAction = () => {

  return async dispatch =>{
    try {
      let result = await http.get('/Product');
      console.log('Result', result.data.content);
  
      // lấy dữ liệu lên redux
      const action = setArrProductAction(result.data.content);
      dispatch(action);
      
    } catch (err) {
      console.log(err);
    }
  }
 
};
