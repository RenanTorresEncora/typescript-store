import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../api/APIFunctions';
import {
  SaleCardsContainer,
  StyledContent,
} from '../components/Content/styles';
import SaleCard, { SaleItemType } from '../components/SaleCard';

const Product: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<SaleItemType>();
  const saleCards = <SaleCard item={product as SaleItemType} />;
  useEffect(() => {
    getOneProduct(id as string).then((data) => setProduct(data as SaleItemType));
  }, [id]);

  return <SaleCardsContainer>{product && saleCards}</SaleCardsContainer>;
};

export default Product;
