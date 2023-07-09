import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

type currentSortType = {
  order: string,
  value: string,
}

type ParamsType = {
  currentCat: number
  currentSortType: currentSortType
  searchValue: string;
  currentPage: number;
}

enum Loading {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[]
}

export const setPizzas = createAsyncThunk<Pizza[], ParamsType>('pizza/setPizzas', async (params) => {
  const {searchValue, currentPage, currentCat, currentSortType} = params
  const search = searchValue ? 'search=' + searchValue : ''
  const page = `&page=${currentPage + 1}&limit=8`

  const data = await axios<Pizza[]>(`https://647794b29233e82dd53be1a1.mockapi.io/items?${currentCat !== 0 ? 'category=' + currentCat + '&' : ''}sortBy=${currentSortType.value}&order=` + currentSortType.order + '&' + search + page)
  return data.data
})

interface PizzaSliceState {
  pizzas: Pizza[],
  isLoading: Loading
}

const initialState: PizzaSliceState = {
  pizzas: [],
  isLoading: Loading.LOADING,
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(setPizzas.pending, (state, action) => {
      state.isLoading = Loading.LOADING
    })
    .addCase(setPizzas.fulfilled, (state, action) => {
      state.isLoading = Loading.SUCCESS
      state.pizzas = action.payload
    })
    .addCase(setPizzas.rejected, (state, action) => {
      state.isLoading = Loading.ERROR
      console.log('Пиццы не загрузились')
    }),
})

export default pizzaSlice.reducer
