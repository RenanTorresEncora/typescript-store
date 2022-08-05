import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllProducts, getUserCart } from '../../api/APIFunctions';
import { SaleItemType } from '../../components/SaleCard';

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
    getAllProducts().then((data) => {
      const userProducts = (data as SaleItemType[])
        .filter((item) => userCart?.products.includes({ productId: item.id, quantity: 1 }));
      console.log(userProducts);
      setUserCartItems(userProducts);
    });
  }, [userId]);
  const cartItems = userCartItems?.map((item) => (
    <li key={item.id}>{item.title}</li>
  ));

  return (
    <div>
      cart page
      {cartItems}
      <button type="button" onClick={() => changePageTo('/')}>
        Back
      </button>
    </div>
  );
};

export default Cart;
