import styled, { css } from 'styled-components';

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.75rem;
  max-height: 8rem;
  width: 80%;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 5px #777;
`;

const CartItemText = styled.p`
  display: flex;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1rem;
`;
export const CartItemTitle = styled(CartItemText)`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-inline: 1rem;
`;
export const CartItemPrice = styled(CartItemText)`
  font-weight: bold;
`;
export const AmountText = styled(CartItemText)`
  color: #333;
`;
export const TotalPriceText = styled(CartItemText)`
  font-style: italic;
`;

const CartItemButton = styled.button`
  display: flex;
  width: 1.75rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1rem;
`;

export const PlusButton = styled(CartItemButton)`
  grid-area: 'addbtn';
`;
export const MinusButton = styled(CartItemButton)`
  grid-area: 'subbtn';
`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const CartItemThumbnail = styled.div`
  display: grid;
  grid-area: 'thumb';
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${({ src }: { src: string }) => css`
    background-image: url(${src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    height: 4rem;
    aspect-ratio: 1;
  `}
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
