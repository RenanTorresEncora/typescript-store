import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllProducts, getUserCart } from '../../api/APIFunctions';
import { SaleItemType } from '../../components/SaleCard';
import { CardTitle } from '../../components/SaleCard/styles';
import { CartItem, CartItemContainer, CartItemPrice, CartItemThumbnail, CartItemTitle } from './styles';

const Cart: React.FC = (): JSX.Element => {
  type Cart = {
    id: number;
    userId: number;
    date: number;
    products: [
      {
        productId: number;
        quantity: number;
      },
    ];
  };
  const { userId } = useParams<string>();
  const changePageTo = useNavigate();
  const [userCart, setUserCart] = useState<Cart>();
  const [userCartItems, setUserCartItems] = useState<SaleItemType[]>();

  useEffect(() => {
    getUserCart(userId as string).then((data) => setUserCart(data as Cart));
  }, [userId]);

  useEffect(() => {
    getAllProducts().then((data) => {
      const userProducts = (data as SaleItemType[])
        .map((item) => ({ id: item.id, product: item }))
        .filter((item) => userCart?.products.find((p) => p.productId === item.id));
      console.log(userProducts);
      setUserCartItems(userProducts.map((item) => item.product));
    });
  }, [userCart]);

  const cartItems = userCartItems?.map((item) => {
    const { id, title, price, image } = item as SaleItemType;
    return (
      <CartItem key={id}>
        <CartItemThumbnail src={image} />
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>{price}</CartItemPrice>
      </CartItem>
    );
  });

  return (
    <>
      <CartItemContainer>{cartItems}</CartItemContainer>
      <button type="button" onClick={() => changePageTo('/')}>
        Back
      </button>
    </>
  );
};

export default Cart;
