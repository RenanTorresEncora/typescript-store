import styled, { css } from 'styled-components';

export const CartItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  height: 5rem;
  width: 15rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 5px #777;
`;

export const CartItemTitle = styled.p`
font-size: 1rem;
`;
export const CartItemPrice = styled.p`
font-size: 0.5rem;
`;

export const CartItemThumbnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${({ src }: { src: string }) => css`
    background-image: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    height: 3rem;
    aspect-ratio: 1;
  `}
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
