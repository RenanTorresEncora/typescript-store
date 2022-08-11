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
  totalAmount: number;
}

const initialState: CartState = {
  products: [],
  totalAmount: 0,
};
export interface CartContextType {
  cartState: CartState;
  setCartState: Dispatch<SetStateAction<CartState>>;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType,
);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, setCartState] = useState(initialState);
  const cartContext = useMemo<CartContextType>(
    () => ({ cartState, setCartState }),
    [cartState],
  );
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartContextProvider;
