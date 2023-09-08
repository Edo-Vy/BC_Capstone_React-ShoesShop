import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";

const initialState = {
  arrProduct: [],
  proDetail:{},
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
    setProDetailAcyion : (state, action) =>{
     // Lấy dữ liệu từ payload component dispatch lên
      const proDetails = action.payload;
       // Cập nhật lại state
      state.proDetail = proDetails;
    }
  },
});

export const { setArrProductAction, setProDetailAcyion } = productReducer.actions;

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

//------------ get action ---- Detail

export const getApiProDetailAction = (idProduct) =>{

  return async dispatch =>{

    try {

      let result = await http.get(`/Product/getbyid?id= ${idProduct}`);

      const action = setProDetailAcyion(result.data.content);
      dispatch(action);

    } catch (erro) {

      console.log(erro);

    }
  }
}
