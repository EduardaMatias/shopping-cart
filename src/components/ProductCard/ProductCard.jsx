import React, { useContext, useState } from 'react';
import './ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import ModalDetailsProduct from '../ModalDetailsProduct/ModalDetailsProduct';

function ProductCard({ data }) {
  const [open, setOpen] = useState(false);

  const { id, title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCard = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <section className="product_card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card_image"
        onClick={() => setOpen(true)}
      />

      <div className="card_infos">
        <h2 className="card_price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card_title">{title}</h2>
      </div>

      <button type="button" className="button_addCard" onClick={handleAddCard}>
        <BsFillCartPlusFill />
      </button>

      <ModalDetailsProduct idProduct={id} setOpen={setOpen} open={open} />
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
