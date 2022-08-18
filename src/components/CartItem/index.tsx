import React, { useContext } from 'react';
import { CartContext, CartItemDetails } from '../../contexts/CartContext';
import {
  PlusButton,
  AmountText,
  CartItemPrice,
  CartItemThumbnail,
  CartItemTitle,
  StyledCartItem,
  MinusButton,
  TotalPriceText,
  AmountContainer,
} from './styles';

interface Props {
  item: CartItemDetails;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const { id, title, price, image } = item.product;
  const { increaseProductQty, decreaseProductQty } = useContext(CartContext);

  return (
    <StyledCartItem key={id}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CartItemThumbnail src={image} />
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>{`US$ ${price.toFixed(2)}`}</CartItemPrice>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <AmountContainer>
          <MinusButton onClick={() => decreaseProductQty(id)}>-</MinusButton>
          <AmountText>{`Amount: ${item.quantity}`}</AmountText>
          <PlusButton onClick={() => increaseProductQty(id)}>+</PlusButton>
        </AmountContainer>
        <TotalPriceText>
          {`Total: US$ ${(item.quantity * price).toFixed(2)}`}
        </TotalPriceText>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
