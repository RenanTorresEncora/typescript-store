import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCart, saveUserCart } from '../../api/APIFunctions';
import CartItem from '../../components/CartItem';
import { CartItemContainer } from '../../components/CartItem/styles';
import CartOrderSummary from '../../components/CartOrderSummary';
import { BuyButton } from '../../components/SaleCard/styles';
import { CartContext, CartItemDetails } from '../../contexts/CartContext';

const Cart: React.FC = (): JSX.Element => {
  const changePageTo = useNavigate();
  const { cartState, setCartState } = useContext(CartContext);

  const cartItemsEl = cartState.products.map((item: CartItemDetails) => (
    <CartItem item={item} key={item.product.id} />
  ));

  useEffect(() => {
    // eslint-disable-next-line max-len
    const totalPrice = Number(cartState.products
      .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
      .toFixed(2));
    setCartState((prev) => ({ ...prev, totalPrice }));
  }, [cartState.products, setCartState]);

  const testCart: UserCart = {
    userId: '1',
    userCart: {
      products: cartState.products.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
      itemsInCart: cartState.itemsInCart,
      totalPrice: cartState.totalPrice,
    },
  }

  return (
    <>
      <CartItemContainer>
        {cartItemsEl.length === 0 ? <div>No items in Cart</div> : cartItemsEl}
      </CartItemContainer>
      <CartOrderSummary />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <BuyButton type="button" onClick={() => saveUserCart(testCart)}>
          Save Cart
        </BuyButton>
        <BuyButton type="button" onClick={() => changePageTo('/')}>
          Back
        </BuyButton>
      </div>
    </>
  );
};

export default Cart;
