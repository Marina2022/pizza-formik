import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/store/filterSlice";


function Categories() {

  const cats = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const dispatch = useDispatch()

  const currentCat = useSelector(state=>state.filters.cat)

  const onCatClick = (index) =>{
    dispatch(setCategory(index))
  }

  return (
    <div className="categories">
      <ul>
        {cats.map((cat, index) => {
          return (
            <li onClick={()=>onCatClick(index)} key={index} className={classNames({
              'active': index === currentCat,
            })}>{cat}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default Categories;
