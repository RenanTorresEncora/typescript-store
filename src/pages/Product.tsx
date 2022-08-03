import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../api/APIFunctions';
import { SaleCardsContainer, StyledContent } from '../components/Content/styles';
import SaleCard, { SaleItemType } from '../components/SaleCard';

const Product: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<SaleItemType | undefined>(undefined);
  const element = (product !== undefined) && (<SaleCard item={product as SaleItemType} />);
  useEffect(() => {
    getOneProduct(id as string).then((data: SaleItemType[]) => setProduct(data[0]));
  }, [id, product]);
  return (
    <SaleCardsContainer>
      {element}
    </SaleCardsContainer>
  );
};

export default Product;
