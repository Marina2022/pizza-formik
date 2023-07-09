import {useDispatch} from "react-redux";
import {minus, plus, removeProduct} from "../../redux/store/cartSlice";
import React from 'react';

export type ProductType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: string;
  count: number
}

type CartItemProps = {
  product: ProductType
}

const CartItem: React.FC<CartItemProps> = ({product}) => {

  const dispatch = useDispatch()

  const {id, title, price, imageUrl, type, size, count} = product
  return (
    <div>
      <div className="cart__item">
        <div className="cart__item-img">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
        </div>
        <div className="cart__item-info">
          <h3>{title}</h3>
          <p>{type}, {size} см.</p>
        </div>
        <div className="cart__item-count">
          <div onClick={() => dispatch(minus(id))}
               className="button button--outline button--circle cart__item-count-minus">
            <img src="/img/minus.svg" alt=""/>
          </div>
          <b>{count}</b>
          <div onClick={() => dispatch(plus(id))}
               className="button button--outline button--circle cart__item-count-plus">
            <img src="/img/plus.svg" alt=""/>
          </div>
        </div>
        <div className="cart__item-price">
          <b>{price} ₽</b>
        </div>
        <div className="cart__item-remove">
          <div onClick={() => dispatch(removeProduct(id))} className="button button--outline button--circle">
            <img src="/img/remove.svg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
