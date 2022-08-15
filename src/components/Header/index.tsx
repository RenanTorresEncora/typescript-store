import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/CartContext';
import { CartButton, StyledHeader, SubTitle, Title } from './styles';

const Header: React.FC = () => {
  const goToPage = useNavigate();
  const { cartState } = useContext(CartContext);
  return (
    <StyledHeader>
      <Title onClick={() => goToPage('/')}>TypeScript Store</Title>
      <SubTitle> Affordable prices, awesome offers!</SubTitle>
      <CartButton
        items={cartState.itemsInCart}
        onClick={() => goToPage('/cart/')}
      />
    </StyledHeader>
  );
};

export default Header;
