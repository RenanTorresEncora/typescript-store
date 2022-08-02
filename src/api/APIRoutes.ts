const storeApiEndpoint = 'https://fakestoreapi.com/';

export const productsEndpoint = `${storeApiEndpoint}products`;

export const limitProducts = (numberOfProducts: number): string => `${productsEndpoint}?limit=${numberOfProducts}`;

export const oneProductEndpoint = (productId: number): string => `${productsEndpoint}/${productId}`;
