import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Product from '../../pages/Product';
import { StyledContent } from './styles';

const Content: React.FC = () => (
  <StyledContent>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  </StyledContent>
);

export default Content;
