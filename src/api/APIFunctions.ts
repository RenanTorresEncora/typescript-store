import {
  oneProductEndpoint,
  productsEndpoint,
  userCartEndpoint,
} from './APIRoutes';

export const getAllProducts = () => getDataFromAPI(productsEndpoint);
export const getOneProduct = (id: string) => getDataFromAPI(oneProductEndpoint(id));
export const getUserCart = (userId: string) => getDataFromAPI(userCartEndpoint(userId));

interface IProduct {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const getDataFromAPI = (endpoint: string) => fetch(endpoint)
  .then((data) => data.json())
  .catch(() => console.log(Error('Unable to fetch data')));
const postDataOnAPI = (endpoint: string, product: IProduct) => fetch(endpoint, {
  method: 'POST',
  body: JSON.stringify(product),
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
    console.warn(`Couldn't POST data. ${error}`);
  });
