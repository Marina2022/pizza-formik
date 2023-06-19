import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalPrice: 0,
    totalCount: 0
  },
  reducers: {
    clearProducts: (state)=>{
      state.products = []
      state.totalPrice = state.products.reduce((sum, elem)=>sum + elem.price * elem.count , 0)
      state.totalCount = state.products.reduce((sum, elem)=>sum + elem.count, 0)
    },
    addProduct: (state, action) => {
      const product = state.products.find(item=>item.id === action.payload.id)
      if (product) { product.count ++
      } else {
        state.products.push({...action.payload, count: 1})
      }
      state.totalPrice = state.products.reduce((sum, elem)=>sum + elem.price * elem.count , 0)
      state.totalCount = state.products.reduce((sum, elem)=>sum + elem.count, 0)
    },
    plus: (state, action)=>{
      state.products.find(item=>item.id === action.payload).count++

      state.totalPrice = state.products.reduce((sum, elem)=>sum + elem.price * elem.count , 0)
      state.totalCount = state.products.reduce((sum, elem)=>sum + elem.count, 0)
    },

    minus: (state, action)=>{
      const product = state.products.find(item=>item.id === action.payload)
      if (product.count === 1) return
      product.count--

      state.totalPrice = state.products.reduce((sum, elem)=>sum + elem.price * elem.count , 0)
      state.totalCount = state.products.reduce((sum, elem)=>sum + elem.count, 0)
    },
    removeProduct: (state, action)=> {
      state.products = state.products.filter(product=> product.id !== action.payload)

      state.totalPrice = state.products.reduce((sum, elem)=>sum + elem.price * elem.count , 0)
      state.totalCount = state.products.reduce((sum, elem)=>sum + elem.count, 0)
    }
  }
})

export const {clearProducts, addProduct, plus, minus, removeProduct} = cartSlice.actions

export default cartSlice.reducer
