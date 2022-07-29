import React, { useState } from 'react';
import { productsEndpoint, limitProducts } from '../../api/APIRoutes';
import useFetch from '../../hooks/useFetch';
import SaleCard, { SaleItemType } from '../SaleCard';
import { SaleCardsContainer, StyledContent } from './styles';

const Content: React.FC = () => {
  const [dataUrl, setDataUrl] = useState(limitProducts(4));
  const saleCards = useFetch(dataUrl).map((item: SaleItemType) => (
    <SaleCard key={item.id} item={item} />
  ));

  const getNewItems = () => {
    setDataUrl(productsEndpoint);
  };
  return (
    <StyledContent>
      <SaleCardsContainer>{saleCards}</SaleCardsContainer>
      <button type="button" onClick={getNewItems}>
        Get new Items
      </button>
    </StyledContent>
  );
};

export default Content;
