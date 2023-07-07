import React, { useState } from 'react';
import propTypes from 'prop-types';
import './Pagination.css';

function Pagination({ setCurrentPage, pages }) {
  const [activeButton, setActiveButton] = useState(0);

  {
    return (
      <div className="pagination">
        {Array.from(Array(pages), (_, index) => {
          return (
            <button
              key={index}
              value={index}
              onClick={(e) => {
                setCurrentPage(+e.target.value);
                setActiveButton(+e.target.value);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`button_pagination ${
                activeButton === index ? 'button_active' : ''
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Pagination;

Pagination.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
