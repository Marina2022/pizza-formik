import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock, {PizzaBlockType} from "../components/Pizza-block/Pizza-block";
import Skeleton from "../components/Pizza-block/Skeleton";
import {useEffect, useRef} from "react";
import Pagination from "../components/Pagination/Pagination";
import {useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import * as qs from "qs";
import {useNavigate} from "react-router-dom";
import {setCategory, setCurrentPage, setSearch, setSort} from "../redux/store/filterSlice";
import {sortTypes} from "../consts";
import {setPizzas} from "../redux/store/pizzaSlice";
import React from 'react'
import {RootState, useAppDispatch} from '../index';

const Home = () => {
  const searchValue = useSelector((state: RootState) => state.filters.search)
  const isLoading = useSelector((state: RootState) => state.pizza.isLoading)

  const currentSortType = useSelector((state: RootState) => state.filters.sort)
  const currentPage = useSelector((state: RootState) => state.filters.currentPage)

  const currentCat = useSelector((state: RootState) => state.filters.cat)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const isMounted = useRef(false)
  const isUrlFromSearchParams = useRef(true)
  const pizzas = useSelector((state: RootState) => state.pizza.pizzas)

  useEffect(() => {
      // в адресную строку пишем параметры в зависимости от выбранных фильтров
      if (isMounted.current) { // но НЕ запускаем этот хук при первом рендере
        const string = qs.stringify({
          category: currentCat,
          sortBy: currentSortType.value,
          order: currentSortType.order,
          page: currentPage + 1,
          search: searchValue
        })
        navigate('?' + string)
      }
    },
    [currentCat, currentSortType, searchValue, currentPage, navigate]
  )

  useEffect(() => {
    console.log('да')
    if (!isUrlFromSearchParams.current) {  // при НЕ первом рендере берем параметры из редакса

      dispatch(setPizzas({currentCat, currentSortType, searchValue, currentPage}))
      window.scrollTo(0, 0);
      isMounted.current = true // первый рендер позади
    }
  }, [currentCat, currentSortType, searchValue, currentPage, dispatch])


  useEffect(() => {
    const searchParams = qs.parse(window.location.search.substring(1))

    if (isUrlFromSearchParams) {  // только при первом рендере берем из адресной строки

      let sortType = sortTypes.find(item => {
        return item.value === searchParams.sortBy
      })
      if (!sortType) sortType = sortTypes[0]
      dispatch(setCategory(searchParams.category ? Number(searchParams.category) : 0))
      dispatch(setSort(sortType))
      dispatch(setSearch(searchParams.search ? String(searchParams.search) : ''))
      dispatch(setCurrentPage(searchParams.page ? Number(searchParams.page) - 1 : 0))
      isUrlFromSearchParams.current = false
    }

  }, [dispatch])

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories/>
          <Sort/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoading === 'error' &&
            <div style={{'margin': '100px auto', 'fontSize': 50}}>no pizzas! Something's gone wrong 😕</div>
          }

          {
            isLoading === 'loading' ? [...new Array(8)].map((item, ind) => <Skeleton
              key={ind}/>) : pizzas.map((pizza:PizzaBlockType, ind) =>
              <PizzaBlock {...pizza} key={ind}/>)
          }
        </div>

        <Pagination/>
      </div>

    </>)
}

export default Home


