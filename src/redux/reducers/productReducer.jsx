import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
import _ from 'lodash'
const initialState = {
  arrProduct: [],
  proDetail:{},
  arrProSearch : [],
  arrProdCategory:[],
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
    setProDetailAction : (state, action) =>{
     // Lấy dữ liệu từ payload component dispatch lên
      const proDetails = action.payload;
       // Cập nhật lại state
      state.proDetail = proDetails;
    },
    setListArrSearch : (state, action) =>{
      state.arrProSearch = action.payload;
    },
    sortListArrAction : (state, action) =>{
      let sortListResult = [...state.arrProSearch];
      sortListResult = _.orderBy( sortListResult, ['price'],[action.payload]);

      state.arrProSearch = sortListResult;
    },
    setCategoryListAction : (state, action) =>{
      state.arrProdCategory = action.payload;
    },
    setListNameCategoryAction : (state, action) =>{
      state.arrProSearch = action.payload;
    }
  },
});

export const { setArrProductAction, setProDetailAction, setListArrSearch, sortListArrAction,setCategoryListAction,setListNameCategoryAction } = productReducer.actions;

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

      const action = setProDetailAction(result.data.content);
      dispatch(action);

    } catch (erro) {

      console.log(erro);

    }
  }
}

//-- search lấy sản phẩm theo keyword 

export const getProductByKeyword = ( keyword) =>{
  return async dispatch =>{

    try{
      let result = await http.get(`/Product?keyword=${keyword}`);
      console.log('Keyword',result.data.content);

      const action = setListArrSearch(result.data.content);
      dispatch(action);

    }catch(erro){
      console.log(erro)
    }
  }
}

//--- search-select all category  

export const getCategoryListApi = () =>{
  return async dispatch =>{
    try {

      let result = await http.get('/Product/getAllCategory');
      const action = setCategoryListAction(result.data.content);
      dispatch(action);
    }catch(err){
      console.log(err)
    }
  }
}
// search branch category 
export const getProdByCategory = (keyword) =>{
return async dispatch =>{
  try{

    let result = await http.get(`/Product/getProductByCategory?categoryId=${keyword}`);


    
    const action = setListNameCategoryAction(result.data.content);
    dispatch(action);
    console.log('name', result.data.content);

  }catch (erro){
    console.log(erro)
  }
}
}
