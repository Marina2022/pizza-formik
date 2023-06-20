import emptyCard from "../assets/img/empty-cart.png"
import classNames from "classnames";
import CartItem from "../components/CartItem/CartItem";
import {Link, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearProducts} from "../redux/store/cartSlice";
import React from 'react';
import {GlobalState} from '../index';

const Cart:React.FC = () => {

  const totalCount = useSelector((state: GlobalState) => state.cart.totalCount)
  const totalPrice = useSelector((state: GlobalState) => state.cart.totalPrice)

  const empty = totalCount === 0

  const dispatch = useDispatch();

  const onClearCart = () => {
    if (window.confirm('Точно все из корзины удалить?')) dispatch(clearProducts())
  }

  const products = useSelector((state: GlobalState) => state.cart.products)

  return (
    <>
      <div className="content">
        <div className="container--cart">
          <Outlet />

          {!empty && <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <img src="../../public/img/cart.svg" alt=""/>
                Корзина</h2>
              <div onClick={onClearCart} className="cart__clear">
                <img src="../../public/img/trash.svg" alt=""/>
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              {
                products.map((product:any) => <CartItem product={product} key={product.id} />)
              }

            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link to="/" className="button button--outline button--add go-back-btn">
                  <img src="../../public/img/grey-arrow-left.svg" alt=""/>
                  <span>Вернуться назад</span>
                </Link>
                <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>}


          <div className={classNames("cart", {"cart--empty": empty})}>
            {
              empty && <div className={"cart-empty-wrapper"}>
                <h2>Корзина пустая 😕</h2>
                <p>
                  Вероятней всего, вы не заказывали ещё пиццу.<br/>
                  Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={emptyCard} alt="Empty cart"/>
                <Link to="/" className="button button--black">
                  <span>Вернуться назад</span>
                </Link>
              </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
