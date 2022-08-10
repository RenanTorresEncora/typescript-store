import React, { useState } from 'react';
import { SaleItemType } from '../SaleCard';
import {
  AddAmountButton,
  AmountText,
  CartItemPrice,
  CartItemThumbnail,
  CartItemTitle,
  StyledCartItem,
  SubtracAmountButton,
  TotalPriceText,
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
  const [amount, setAmount] = useState(item.quantity);
  return (
    <StyledCartItem key={id}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CartItemThumbnail src={image} />
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>{`US$ ${price.toFixed(2)}`}</CartItemPrice>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <SubtracAmountButton onClick={() => setAmount((prev) => prev - 1)}>-</SubtracAmountButton>
          <AmountText>{`Amount: ${amount}`}</AmountText>
          <AddAmountButton onClick={() => setAmount((prev) => prev + 1)}>+</AddAmountButton>
        </div>
        <TotalPriceText>{`Total: US$ ${(amount * price).toFixed(2)}`}</TotalPriceText>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
