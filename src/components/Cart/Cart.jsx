import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
import BuyButton from '../BuyButton/BuyButton';

function Cart() {
  const { cartItems, isCartVisible, setCartItems, setIsCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  const handleBuy = () => {
    setCartItems([]);
    setIsCartVisible(false);
  };

  return (
    <section className={`cart ${isCartVisible && 'cart-active'}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
      <BuyButton disabled={cartItems.length === 0} handleClick={handleBuy}/>
    </section>
  );
}

export default Cart;
