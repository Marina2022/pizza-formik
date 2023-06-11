import emptyCard from "../assets/img/empty-cart.png"
import classNames from "classnames";
import CartItem from "../components/CartItem/CartItem";
import {Link} from "react-router-dom";

const Cart = () => {

  const empty = false

  return (
    <>
      <div className="content">
        <div className="container--cart">
          {!empty &&  <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <img src="../../public/img/cart.svg" alt=""/>
                Корзина</h2>
              <div className="cart__clear">
                <img src="../../public/img/trash.svg" alt=""/>
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="content__items">
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Всего пицц: <b>3 шт.</b> </span>
                <span> Сумма заказа: <b>900 ₽</b> </span>
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
                <h2>Корзина пустая <icon>😕</icon></h2>
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
