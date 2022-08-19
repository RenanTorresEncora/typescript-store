import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/CartContext';
import { CartButton, StyledHeader, SubTitle, Title } from './styles';

const Header: React.FC = () => {
  const goToPage = useNavigate();
  const { cartState } = useContext(CartContext);
  const [itemsInCart, setItemsInCart] = useState(0);
  useEffect(() => {
    setItemsInCart(cartState.itemsInCart);
  }, [cartState.itemsInCart]);

  return (
    <StyledHeader>
      <Title onClick={() => goToPage('/')}>TypeScript Store</Title>
      <SubTitle> Affordable prices, awesome offers!</SubTitle>
      <CartButton
        items={itemsInCart}
        onClick={() => goToPage('/cart/')}
      />
    </StyledHeader>
  );
};

export default Header;
