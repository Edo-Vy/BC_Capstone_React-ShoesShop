import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product :[]
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {}
});

export const {} = productReducer.actions

export default productReducer.reducer