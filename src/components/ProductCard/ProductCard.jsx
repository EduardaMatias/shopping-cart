import React from 'react';
import './ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  return (
    <section className="product_card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card_image"
      />

      <div className="card_infos">
        <h2 className="card_price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card_title">{title}</h2>
      </div>

      <button type="button" className="button_addCard">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
