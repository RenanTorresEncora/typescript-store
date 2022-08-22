import { CartItemDetails } from '../contexts/CartContext';
import {
  localUserCartEndpoint,
  oneProductEndpoint,
  productsEndpoint,
  userCartEndpoint,
} from './APIRoutes';

export const getAllProducts = () => getDataFromAPI(productsEndpoint);
export const getOneProduct = (id: string) =>
  getDataFromAPI(oneProductEndpoint(id));
export const getUserCart = (userId: string) =>
  getDataFromAPI(userCartEndpoint(userId));
export const saveUserCart = (userCart: UserCart) =>
  postDataOnAPI(localUserCartEndpoint(userCart.userId), userCart);

export interface UserCart {
  userId: string;
  userCart: {
    products: {
      productId: number;
      quantity: number;
    }[];
    itemsInCart: number;
    totalPrice: number;
  };
}

const getDataFromAPI = (endpoint: string) =>
  fetch(endpoint)
    .then((data) => data.json())
    .catch(() => console.log(Error('Unable to fetch data')));

const postDataOnAPI = (endpoint: string, userCart: UserCart) =>
  fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(userCart),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.warn(`Couldn't POST data. ${console.error(error)}`);
    });
