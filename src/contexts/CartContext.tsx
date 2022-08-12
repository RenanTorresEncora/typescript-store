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
  totalPrice: 0,
};

export interface CartContextType {
  cartState: CartState;
  setCartState: Dispatch<SetStateAction<CartState>>;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);
const getCartFromLS = () => {
  // The following feature isn't workin properly right now, so the app will use initialState instead
  const userCartFromLS = (JSON.parse(localStorage.getItem('UserCart') as string) as CartState)
    || initialState;
  return userCartFromLS;
};
const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, setCartState] = useState(getCartFromLS());
  const cartContext = useMemo<CartContextType>(
    () => ({ cartState, setCartState }),
    [cartState],
  );
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartContextProvider;
