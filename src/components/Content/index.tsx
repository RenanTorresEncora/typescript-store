import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartContextProvider from '../../contexts/CartContext';
import Cart from '../../pages/cart';
import Home from '../../pages/home/Home';
import Product from '../../pages/product';
import { StyledContent } from './styles';

const Content: React.FC = () => (
  <StyledContent>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart/" element={<Cart />} />
    </Routes>
  </StyledContent>
);

export default Content;
