const storeApiEndpoint = 'https://fakestoreapi.com/';

export const productsEndpoint = `${storeApiEndpoint}products`;

export const limitProducts = (numberOfProducts: number): string => `${productsEndpoint}?limit=${numberOfProducts}`;

export const getOneProduct = (productId: number): string => `${productsEndpoint}/${productId}`;
