import React from 'react';
import { SaleItemType } from '../SaleCard';
import {
  CartItemPrice,
  CartItemThumbnail,
  CartItemTitle,
  StyledCartItem,
} from './styles';

interface Props {
  item: SaleItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { id, title, price, image } = item;
  return (
    <StyledCartItem key={id}>
      <CartItemThumbnail src={image} />
      <CartItemTitle>{title}</CartItemTitle>
      <CartItemPrice>{price}</CartItemPrice>
    </StyledCartItem>
  );
};

export default CartItem;
