const storeApiEndpoint = 'https://fakestoreapi.com/';

export const allProducts = `${storeApiEndpoint}products`;

export const limitProducts = (numberOfProducts: number): string => `${allProducts}?limit=${numberOfProducts}`;
