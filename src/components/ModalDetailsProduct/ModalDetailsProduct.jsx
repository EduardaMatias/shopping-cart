import React, { useContext, useEffect, useState } from 'react';
import './ModalDetailsProduct.css';
import { Badge, Box, Modal, Typography } from '@mui/material';
import propTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import fetchProduct from '../../api/fetchProduct';
import Loading from '../Loading/Loading';
import formatCurrency from '../../utils/formatCurrency';
import BuyButton from '../BuyButton/BuyButton';
import { BsFillCartPlusFill } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import Carousel from '../Carousel/Carousel';

function ModalDetailsProduct({ open, setOpen, idProduct }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);

  const { condition, title, /* thumbnail, */ price, warranty } = product;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCard = () => {
    setCartItems([...cartItems, product]);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchProduct(idProduct).then((response) => {
      setProduct(response);
      setLoading(false);
    });
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    outline: 'none',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {loading ? (
          <Loading />
        ) : (
          <Box sx={style}>
            <div className="modal_header">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
              </Typography>
              <AiFillCloseCircle
                className="button_close"
                onClick={handleClose}
              />
            </div>
            <div className="badge_content">
              <Badge badgeContent={condition} color="primary" />
            </div>
            <div className="infos_content">
              {/* <img
                src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                alt="product"
                className="card_image"
                onClick={() => setOpen(true)}
              /> */}
              <Carousel data={product.pictures} className="card_image"/>
              <div className="details">
                <div>
                  <h4 className="price">{formatCurrency(price, 'BRL')}</h4>
                  <span className="description">{warranty}</span>
                </div>
                <div className="button_content">
                  <BuyButton handleClick={handleClose} />
                  <button
                    type="button"
                    className="button_buy"
                    onClick={handleAddCard}
                  >
                    <BsFillCartPlusFill />
                  </button>
                </div>
              </div>
            </div>
          </Box>
        )}
      </Modal>
    </div>
  );
}

export default ModalDetailsProduct;

ModalDetailsProduct.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
