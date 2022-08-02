import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/APIFunctions';
import SaleCard, { SaleItemType } from '../SaleCard';
import { SaleCardsContainer, StyledContent } from './styles';

const Content: React.FC = () => {
  const [products, setProducts] = useState<SaleItemType[]>([]);
  const saleCards = products?.map((item: SaleItemType) => (
    <SaleCard key={item.id} item={item} />
  ));

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);
  // const postNewItem = () => {
  //   const postItem: SaleItemType = {
  //     id: 21,
  //     rating: { rate: 10.0, count: 20 },
  //     category: 'clothing',
  //     description: 'Black t-shirt',
  //     image: 'https://images.pexels.com/photos/9558233/pexels-photo-9558233.jpeg',
  //     price: 15.0,
  //     title: 'Black T-Shirt',
  //   };
  //   postDataOnAPI(productsEndpoint, postItem);
  //   setProducts((prevItems) => [postItem, ...prevItems]);
  // };
  return (
    <StyledContent>
      <SaleCardsContainer>{saleCards}</SaleCardsContainer>
    </StyledContent>
  );
};

export default Content;
