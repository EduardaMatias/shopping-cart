import React from 'react';
import './Carousel.css';
import { Carousel as Carrossel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import propTypes from 'prop-types';

function Carousel({ data }) {
  const filteredPictures = data.filter((picture) => {
    const { size } = picture;
    const [width, height] = size.split('x');
    return width !== height; // Verifica se a imagem não é quadrada
  });

  console.log(filteredPictures);

  return (
    <Carrossel showStatus={false} showThumbs={false} className="carousel">
      {filteredPictures.map((image) => (
        <div key={image.id}>
          <img
            src={image.url.replace(/\w\.jpg/gi, 'W.jpg')}
            alt="Imagem do produto"
            className="product_image"
          />
        </div>
      ))}
    </Carrossel>
  );
}

export default Carousel;

Carousel.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
