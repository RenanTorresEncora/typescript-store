import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllProducts, getUserCart } from '../../api/APIFunctions';
import CartItem, { CartItemDetails } from '../../components/CartItem';
import { CartItemContainer } from '../../components/CartItem/styles';
import { SaleItemType } from '../../components/SaleCard';

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
  const [cartItems, setCartItems] = useState<CartItemDetails[]>([]);
  const [totalAmountFromCart, setTotalAmountFromCart] = useState(0);
  const cartItemsEl = cartItems?.map((item) => (
    <CartItem item={item} key={item.product.id} />
  ));
  useEffect(() => {
    const getCartProducts = async () => {
      const allproducts = (await getAllProducts()) as SaleItemType[];
      const userCart = (await getUserCart(userId as string)) as UserCart;
      const userProductsInCart = userCart.products.map((product) => ({
        product: allproducts.find(
          (item) => item.id === product.productId,
        ) as SaleItemType,
        quantity: product.quantity,
      }));
      setTotalAmountFromCart(
        userProductsInCart.reduce((acc, item) => {
          const amount = item.product.price * item.quantity;
          return acc + amount;
        }, 0),
      );
      setCartItems(userProductsInCart);
    };
    getCartProducts();
  }, [userId, totalAmountFromCart]);

  return (
    <>
      <CartItemContainer>
        {cartItemsEl || <div>No items in Cart</div>}
      </CartItemContainer>
      <div>
        Total: US$
        {' '}
        <span>{totalAmountFromCart.toFixed(2)}</span>
      </div>
      <button type="button" onClick={() => changePageTo('/')}>
        Back
      </button>
    </>
  );
};

export default Cart;
