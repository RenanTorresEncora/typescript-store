import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/APIFunctions';
import { SaleCardsContainer } from '../components/Content/styles';
import SaleCard, { SaleItemType } from '../components/SaleCard';

const Home: React.FC = () => {
  const [products, setProducts] = useState<SaleItemType[]>([]);
  const saleCards = products?.map((item: SaleItemType) => (
    <SaleCard key={item.id} item={item} />
  ));

  useEffect(() => {
    getAllProducts().then((data) => setProducts(data as SaleItemType[]));
  }, []);
  return <SaleCardsContainer>{saleCards}</SaleCardsContainer>;
};

export default Home;
