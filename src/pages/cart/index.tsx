import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllProducts, getUserCart } from '../../api/APIFunctions';
import CartItem from '../../components/CartItem';
import { CartItemContainer } from '../../components/CartItem/styles';
import { SaleItemType } from '../../components/SaleCard';

interface Cart {
  id: number;
  userId: number;
  date: number;
  products: CartProducts[];
}
type CartProducts = {
  productId: number;
  quantity: number;
};

const Cart: React.FC = (): JSX.Element => {
  const { userId } = useParams<string>();
  const changePageTo = useNavigate();
  const [cartItems, setCartItems] = useState<SaleItemType[]>([]);
  const cartItemsEl = cartItems?.map((item) => <CartItem item={item} key={item.id} />);
  useEffect(() => {
    const getCartProducts = async () => {
      const allproducts = (await getAllProducts()) as SaleItemType[];
      const userCart = (await getUserCart(userId as string)) as Cart;
      // eslint-disable-next-line max-len
      const userProductsInCart = userCart.products.map((product) => allproducts.find((item) => item.id === product.productId)) as SaleItemType[];
      setCartItems(userProductsInCart);
    };
    getCartProducts();
  }, [userId]);

  return (
    <>
      <CartItemContainer>{cartItemsEl}</CartItemContainer>
      <div>Total:</div>
      <button type="button" onClick={() => changePageTo('/')}>
        Back
      </button>
    </>
  );
};

export default Cart;
