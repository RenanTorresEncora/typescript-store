const storeApiEndpoint = 'https://fakestoreapi.com/';

export const productsEndpoint = `${storeApiEndpoint}products`;

export const userCartEndpoint = (userId: string) => `${storeApiEndpoint}carts/${userId}`;

export const limitProducts = (numberOfProducts: string): string => `${productsEndpoint}?limit=${numberOfProducts}`;

export const oneProductEndpoint = (productId: string): string => `${productsEndpoint}/${productId}`;
