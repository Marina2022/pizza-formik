import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from '../../components/CartItem/CartItem';


interface CartSliceState {
  products: ProductType[],
  totalPrice: number,
  totalCount: number
}

const initialState: CartSliceState = {
  products: [],
  totalPrice: 0,
  totalCount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    setCart: (state, action) => {
      state.products = action.payload
      state.totalCount = action.payload.length
      state.totalPrice = action.payload.reduce((sum: number, elem:ProductType) => sum + elem.price * elem.count, 0)
      //state.totalPrice = 100

    },

    clearProducts: (state) => {
      state.products = []
      state.totalPrice = state.products.reduce((sum, elem) => sum + elem.price * elem.count, 0)
      state.totalCount = state.products.reduce((sum, elem) => sum + elem.count, 0)
    },
    addProduct: (state, action) => {
      const product = state.products.find((item: ProductType) => item.id === action.payload.id)

      if (product) {
        product.count++
      } else {
        state.products.push({...action.payload, count: 1})
      }
      state.totalPrice = state.products.reduce((sum, elem) => sum + elem.price * elem.count, 0)
      state.totalCount = state.products.reduce((sum, elem) => sum + elem.count, 0)
    },
    plus: (state, action: PayloadAction<string>) => {
      const product = state.products.find((item: ProductType) => item.id === action.payload)
      if (product) product.count++

      state.totalPrice = state.products.reduce((sum, elem) => sum + elem.price * elem.count, 0)
      state.totalCount = state.products.reduce((sum, elem) => sum + elem.count, 0)
    },

    minus: (state, action) => {
      const product = state.products.find((item: ProductType) => item.id === action.payload)
      if (product) {
        if (product.count === 1) return
        product.count--
      }
      state.totalPrice = state.products.reduce((sum, elem) => sum + elem.price * elem.count, 0)
      state.totalCount = state.products.reduce((sum, elem) => sum + elem.count, 0)
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload)
      state.totalPrice = state.products.reduce((sum, elem) => sum + elem.price * elem.count, 0)
      state.totalCount = state.products.reduce((sum, elem) => sum + elem.count, 0)
    }
  }
})

export const {clearProducts, addProduct, plus, minus, removeProduct, setCart} = cartSlice.actions

export default cartSlice.reducer
