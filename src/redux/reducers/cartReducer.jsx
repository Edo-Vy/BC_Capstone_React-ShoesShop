import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    listCartTemp :[],
}

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {

    addToCart : ( state, action) =>{


    }
  }
});

export const {} = cartReducer.actions

export default cartReducer.reducer