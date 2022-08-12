import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllProducts, getUserCart } from '../../api/APIFunctions';
import CartItem from '../../components/CartItem';
import { CartItemContainer } from '../../components/CartItem/styles';
import CartOrderSummary from '../../components/CartOrderSummary';
import { SaleItemType } from '../../components/SaleCard';
import { BuyButton } from '../../components/SaleCard/styles';
import { CartContext, CartItemDetails } from '../../contexts/CartContext';

interface UserCart {
  id: number;
  userId: number;
  date: number;
  products: {
    productId: number;
    quantity: number;
  }[];
}

const Cart: React.FC = (): JSX.Element => {
  const { userId } = useParams<string>();
  const changePageTo = useNavigate();
  const { cartState, setCartState } = useContext(CartContext);

  useEffect(() => {
    const allProducts = getAllProducts();
    const userCart = getUserCart(userId as string);
    const fetchingData = [allProducts, userCart];

    Promise.all(fetchingData).then((results) => {
      const userProductsInCart = (results[1] as UserCart).products.map((product) => ({
        product: (results[0] as SaleItemType[]).find(
          (item) => item.id === product.productId,
        ) as SaleItemType,
        quantity: product.quantity,
      }));
      const totalAmount = userProductsInCart.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
      );
      setCartState({ products: userProductsInCart, totalAmount });
    });
  }, [userId, setCartState]);

  useEffect(() => {
    // eslint-disable-next-line max-len
    const totalAmount = cartState.products.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setCartState((prev) => ({ ...prev, totalAmount }));
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
