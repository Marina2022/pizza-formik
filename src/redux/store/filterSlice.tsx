import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";

type SortType = {
  name: string;
  value: string;
  order: string;
}

interface FilterSliceState {
  cat: number;
  sort: SortType;
  search: string;
  currentPage: number;
}

const initialState: FilterSliceState = {
  cat: 0,
  sort: {
    name: 'популярности',
    value: 'rating',
    order: 'desc',
  },
  search: '',
  currentPage: 0
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.currentPage = 0
      state.cat = action.payload
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.currentPage = 0
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.currentPage = 0
      state.search = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  }
})

export const {setCategory, setSort, setCurrentPage, setSearch} = filterSlice.actions

export default filterSlice.reducer
