import React, {useRef, useState} from "react";
import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {setSort} from "../redux/store/filterSlice";
import {sortTypes} from "../consts";
import {RootState} from '../index';

const Sort: React.FC = React.memo (
  () => {

    const sortDivRef = useRef<HTMLDivElement | null>(null)

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const currentSortType = useSelector((state: RootState) => state.filters.sort)

    type SortTypeType = {
      name: string;
      value: string;
      order: string;
    }

    const onSortChosen = (sortType: SortTypeType) => {
      dispatch(setSort(sortType))
      setOpen(false)
    }

    const onSortClick = (e: React.MouseEvent<HTMLDivElement>) => {
      setOpen((prev) => !prev)

      const onDocClick = (e: MouseEvent) => {
        const insideModal = sortDivRef.current && e.composedPath().includes(sortDivRef.current!)
        if (!insideModal) {
          setOpen(false)
          document.removeEventListener('click', onDocClick)
        }
      }
      document.addEventListener('click', onDocClick)
    }

    return (
      <div className="sort" ref={sortDivRef}>
        <div onClick={onSortClick} className="sort__label">
          <svg className={classNames({
            "openIcon": !open
          })}
               width="10"
               height="6"
               viewBox="0 0 10 6"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span>{currentSortType.name}</span>
        </div>

        {
          open &&
          <div className="sort__popup">
            <ul>
              {
                sortTypes.map((sortType, ind) => {
                    return <li
                      key={ind}
                      onClick={() => onSortChosen(sortType)}
                      className={classNames({"active": sortType.value === currentSortType.value})}>{sortType.name}</li>
                  }
                )
              }
            </ul>
          </div>
        }
      </div>
    );
  }
)


export default Sort;
