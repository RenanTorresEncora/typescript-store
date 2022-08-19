import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct, saveUserCart } from '../../api/APIFunctions';
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
    const totalPrice = cartState.products.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setCartState((prev) => ({ ...prev, totalPrice }));
  }, [cartState.products, setCartState]);

  const testProduct: IProduct = {
    category: 'test',
    title: 'Title',
    price: 10,
    description: 'desc',
    image: 'img',
  };

  return (
    <>
      <CartItemContainer>
        {cartItemsEl.length === 0 ? <div>No items in Cart</div> : cartItemsEl}
      </CartItemContainer>
      <CartOrderSummary />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <BuyButton type="button" onClick={() => saveUserCart(testProduct)}>
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
