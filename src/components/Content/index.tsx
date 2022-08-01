import React, { useState } from 'react';
import { getDataFromAPI, postDataOnAPI } from '../../api/APIFunctions';
import { productsEndpoint } from '../../api/APIRoutes';
import SaleCard, { SaleItemType } from '../SaleCard';
import { SaleCardsContainer, StyledContent } from './styles';

const Content: React.FC = () => {
  const [products, setProducts] = useState<SaleItemType[]>([]);
  const saleCards = products?.map((item: SaleItemType) => (
    <SaleCard key={item.id} item={item} />
  ));
  const getNewItems = () => {
    getDataFromAPI(productsEndpoint).then((data) => setProducts(data));
  };
  const postNewItem = () => {
    const postItem: SaleItemType = {
      id: 21,
      rating: { rate: 10.0, count: 20 },
      category: 'clothing',
      description: 'Black t-shirt',
      image: 'https://images.pexels.com/photos/9558233/pexels-photo-9558233.jpeg',
      price: 15.0,
      title: 'Black T-Shirt',
    };
    postDataOnAPI(productsEndpoint, postItem);
    setProducts((prevItems) => [...prevItems, postItem]);
  };
  return (
    <StyledContent>
      <SaleCardsContainer>{saleCards}</SaleCardsContainer>
      <button type="button" onClick={getNewItems}>
        Get new Items
      </button>
      <button type="button" onClick={postNewItem}>
        Post new Item
      </button>
    </StyledContent>
  );
};

export default Content;
