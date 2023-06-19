import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const setPizzas = createAsyncThunk('pizza/setPizzas', async (params) => {

  const {searchValue, currentPage, currentCat, currentSortType} = params
  const search = searchValue ? 'search=' + searchValue : ''
  const page = `&page=${currentPage + 1}&limit=8`

  const data = await axios(`https://647794b29233e82dd53be1a1.mockapi.io/items?${currentCat !== 0 ? 'category=' + currentCat + '&' : ''}sortBy=${currentSortType.value}&order=` + currentSortType.order + '&' + search + page)


  return data.data
})

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [],
    isLoading: 'loading',
  },
  reducers: {},
  extraReducers: builder => builder
    .addCase(setPizzas.pending, (state, action) => {
      state.isLoading = 'loading'
    })
    .addCase(setPizzas.fulfilled, (state, action) => {
      state.isLoading = 'success'
      state.pizzas = action.payload
    })
    .addCase(setPizzas.rejected, (state, action) => {
      state.isLoading = 'error'
      console.log('Пиццы не загрузились')
    }),
})

export default pizzaSlice.reducer
