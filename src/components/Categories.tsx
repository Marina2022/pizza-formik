import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/store/filterSlice";
import {RootState} from '../index';
import React from 'react';


const Categories =  React.memo (
  () => {
    const cats = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const dispatch = useDispatch()
    const currentCat = useSelector((state: RootState) => state.filters.cat)

    const onCatClick = (index: number) => {
      dispatch(setCategory(index))
    }

    return (
      <div className="categories">
        <ul>
          {cats.map((cat, index) => {
            return (
              <li onClick={() => onCatClick(index)} key={index} className={classNames({
                'active': index === currentCat,
              })}>{cat}</li>
            )
          })}
        </ul>
      </div>
    );
  }
)

export default Categories;
