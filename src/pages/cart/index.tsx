import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { CartItemContainer } from '../../components/CartItem/styles';
import CartOrderSummary from '../../components/CartOrderSummary';
import { BuyButton } from '../../components/SaleCard/styles';
import { CartContext, CartItemDetails } from '../../contexts/CartContext';

const Cart: React.FC = (): JSX.Element => {
  const changePageTo = useNavigate();
  const { cartState, setCartState } = useContext(CartContext);

  useEffect(() => {
    // eslint-disable-next-line max-len
    const totalPrice = cartState.products.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setCartState((prev) => ({ ...prev, totalPrice }));
  }, [cartState.products, setCartState]);

  const cartItemsEl = cartState.products.map((item: CartItemDetails) => (
    <CartItem item={item} key={item.product.id} />
  ));
  return (
    <>
      <CartItemContainer>
        {cartItemsEl || <div>No items in Cart</div>}
      </CartItemContainer>
      <CartOrderSummary />
      <BuyButton type="button" onClick={() => changePageTo('/')}>
        Back
      </BuyButton>
    </>
  );
};

export default Cart;
