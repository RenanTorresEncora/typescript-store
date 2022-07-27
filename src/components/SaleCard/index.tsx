import React from 'react';
import { Card, CardDescription, CardImage, CardTitle } from './styles';

export type SaleItemType = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
};

interface IProps {
  item: SaleItemType;
}
const SaleCard: React.FC<IProps> = ({ item }): JSX.Element => {
  const { title, description, image } = item;
  return (
    <Card>
      <CardImage src={image} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};
export default SaleCard;
