import React, {useState} from "react";
import {pizzaTypes} from "../../consts";
import classNames from 'classnames';
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/store/cartSlice";
import {Link} from "react-router-dom";

export type PizzaBlockType = {id: string, title: string, price:number, imageUrl: string, types: number[], sizes: number[]}

const PizzaBlock: React.FC<PizzaBlockType> = ({id, title, price, imageUrl, types, sizes}) => {

  const [pizzaQuantity, setPizzaQuantity] = useState(0);
  const [pizzaType, setPizzaType] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);

  const dispatch = useDispatch()

  const onPizzaTypeClick = (type: number) => {
    setPizzaType(type);
  }
  const onSizeClick = (size: number) => {
    setCurrentSize(size);
  }

  const onAddClick = () => {
    setPizzaQuantity((prev) => prev + 1)
    dispatch(addProduct({
      id, title, price, imageUrl, type: pizzaTypes[pizzaType], size: sizes[currentSize]
    }))

  }

  return (
    <div className="pizzaBlock">
      <img
        className="pizzaBlock__image"
        src={imageUrl}
        alt="Pizza"
      />
      <Link to={'/pizzas/' + id} className="pizzaLink" ><h4 className="pizzaBlock__title">{title}</h4></Link>
      <div className="pizzaBlock__selector">
        <ul>
          {types.map((type) =>
            <li key={type} onClick={() => onPizzaTypeClick(type)} className={classNames({
              "active": type === pizzaType
            })}>{pizzaTypes[type]}</li>
          )}
        </ul>
        <ul>
          {sizes.map((size, index) => <li onClick={() => onSizeClick(index)} key={index}
                                          className={classNames({'active': index === currentSize})}>{size} см.</li>
          )}
        </ul>
      </div>
      <div className="pizzaBlock__bottom">
        <div className="pizzaBlock__price">от {price} ₽</div>
        <button onClick={onAddClick} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {
            pizzaQuantity > 0 && <i>{pizzaQuantity}</i>
          }
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
