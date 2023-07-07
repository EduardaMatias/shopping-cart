import React, { useContext } from 'react';
import './BuyButton.css';
import propTypes from 'prop-types';
import { toast } from 'react-toastify';
import AppContext from '../../context/AppContext';
import 'react-toastify/dist/ReactToastify.css';

function BuyButton({ disabled }) {
  const { setCartItems, setIsCartVisible } = useContext(AppContext);

  const handleBuy = () => {
    toast.success('Compra realizada com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    setCartItems([]);
    setIsCartVisible(false);
  };

  return (
    <>
      <button
        className={`buy_button ${disabled ? 'disabled' : 'able'}`}
        disabled={disabled}
        onClick={handleBuy}
      >
        Comprar
      </button>
    </>
  );
}

export default BuyButton;

BuyButton.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
