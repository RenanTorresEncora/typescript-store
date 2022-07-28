import React from 'react';
import { limitProducts } from '../../api/API';
import useFetch from '../../hooks/useFetch';
import SaleCard, { SaleItemType } from '../SaleCard';
import SaleCardsContainer from './styles';

const Content: React.FC = () => {
  const saleCards = useFetch(limitProducts(5)).map((item: SaleItemType) => (
    <SaleCard key={item.id} item={item} />
  ));

  const getNewItems = () => {
    console.log('click');
  };
  return (
    <>
      <SaleCardsContainer>{saleCards}</SaleCardsContainer>
      <button type="button" onClick={getNewItems}>
        Get new Items
      </button>
    </>
  );
};

export default Content;
