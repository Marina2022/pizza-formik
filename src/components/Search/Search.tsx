import s from './Search.module.scss';
import {ChangeEventHandler, useCallback, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {setSearch} from "../../redux/store/filterSlice";
// @ts-ignore
import debounce from 'lodash.debounce';

const Search = () => {

  const dispatch = useDispatch()

  const [val, setVal] = useState('')

  const lazySearchHandler = useCallback(
    debounce((str: string) => dispatch(setSearch(str)), 300),
    [])

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    lazySearchHandler(e.target.value)
    setVal(e.target.value)

  }

  const searchRef = useRef<HTMLInputElement | null>(null)

  const onCancelClick = () => {
    dispatch(setSearch(''))
    searchRef.current?.focus()
    setVal('')
  }

  return (
    <div className={s.searchWrapper}>
      <svg className={s.searchIcon} height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px">
        <rect fill="none" height="50" width="50"/>
        <circle cx="21" cy="20" fill="none" r="16" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10"
                strokeWidth="2"/>
        <line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="32.229" x2="45.5" y1="32.229"
              y2="45.5"/>
      </svg>

      <input ref={searchRef} value={val} onChange={onSearchChange} type="search" placeholder="Search"
             className={s.searchInput}/>

      <button onClick={onCancelClick}>
        <svg className={s.closeIcon} viewBox="0 0 24 24">
          <g id="grid_system"/>
          <g id="_icons">
            <path
              d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"/>
          </g>
        </svg>
      </button>
    </div>

  );
};

export default Search;
