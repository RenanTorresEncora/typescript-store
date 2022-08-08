import React from 'react';
import { useNavigate } from 'react-router';
import { CartButton, StyledHeader, SubTitle, Title } from './styles';

const Header: React.FC = () => {
  const goToPage = useNavigate();
  return (
    <StyledHeader>
      <Title>TypeScript Store</Title>
      <SubTitle> Affordable prices, awesome offers!</SubTitle>
      <CartButton
        onClick={() => goToPage(`/cart/${Math.floor(Math.random() * 6) + 1}`)}
      />
    </StyledHeader>
  );
};

export default Header;
