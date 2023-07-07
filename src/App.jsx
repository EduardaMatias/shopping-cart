import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider>
      <ToastContainer />
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
