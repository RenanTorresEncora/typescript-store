import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { SaleItemType } from '../components/SaleCard';

export interface CartItemDetails {
  quantity: number;
  product: SaleItemType;
}

export interface CartState {
  products: CartItemDetails[];
  itemsInCart: number,
  totalPrice: number;
}

export interface UserCart {
  id: number;
  userId: number;
  date: number;
  products: {
    productId: number;
    quantity: number;
  }[];
}

const initialState: CartState = {
  products: [],
  itemsInCart: 0,
  totalPrice: 0,
};

export interface CartContextType {
  cartState: CartState;
  setCartState: Dispatch<SetStateAction<CartState>>;
  addProductToCart: (product: CartItemDetails) => void;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);
const getCartFromLS = () => {
  const userCartFromLS = (JSON.parse(localStorage.getItem('UserCart') as string) as CartState)
    || initialState;
  return userCartFromLS;
};

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, setCartState] = useState(getCartFromLS());
  const addProductToCart = ({ product, quantity }: CartItemDetails) => {
    setCartState((prevState) => {
      const products = [...prevState.products, { product, quantity }];
      const itemsInCart = products.reduce((total, item) => total + item.quantity, 0);
      const newState = {
        ...prevState,
        products,
        itemsInCart,
      };
      localStorage.setItem('UserCart', JSON.stringify(newState));
      return newState;
    });
  };
  const cartContext = useMemo<CartContextType>(
    () => ({ cartState, setCartState, addProductToCart }),
    [cartState],
  );
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartContextProvider;
