import React from 'react';
import { SaleItemType } from '../SaleCard';
import {
  CartItemPrice,
  CartItemThumbnail,
  CartItemTitle,
  StyledCartItem,
} from './styles';

export interface CartItemDetails {
  quantity: number;
  product: SaleItemType;
}

interface Props {
  item: CartItemDetails;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { id, title, price, image } = item.product;
  return (
    <StyledCartItem key={id}>
      <CartItemThumbnail src={image} />
      <CartItemTitle>{title}</CartItemTitle>
      <CartItemPrice>{`US$ ${price.toFixed(2)}`}</CartItemPrice>
      {`Amount: ${item.quantity}`}
      <br />
      {`Total: US$ ${(item.quantity * price).toFixed(2)}`}
    </StyledCartItem>
  );
};

export default CartItem;
