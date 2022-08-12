import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { OrderText, StyledCartOrderSummary } from './styles';

const CartOrderSummary = () => {
  const { cartState } = useContext(CartContext);
  return (
    <StyledCartOrderSummary>
      <OrderText>{`Items in Cart: ${cartState.products.reduce((acc, item) => (acc + item.quantity), 0)}`}</OrderText>
      <OrderText>{`Total: US$ ${cartState.totalPrice.toFixed(2)}`}</OrderText>
    </StyledCartOrderSummary>
  );
};

export default CartOrderSummary;
