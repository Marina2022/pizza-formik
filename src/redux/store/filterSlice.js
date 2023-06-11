import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    cat: 0,
    sort: {
      name: 'популярности',
      value: 'rating',
      order: 'desc',
    },
    search: '',
    currentPage: 0
  },
  reducers: {
    setCategory: (state, action)=>{
      state.currentPage = 0
      state.cat = action.payload
    },
    setSort: (state, action)=>{
      state.currentPage = 0
      state.sort = action.payload
    },
    setSearch: (state, action)=>{
      state.currentPage = 0
      state.search = action.payload
    },
    setCurrentPage: (state, action)=>{
      state.currentPage = action.payload
    },
  }
})

export const {setCategory, setSort, setCurrentPage, setSearch} = filterSlice.actions

export default filterSlice.reducer
