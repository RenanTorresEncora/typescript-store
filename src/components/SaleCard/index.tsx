import React from 'react';
import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
  PriceTag,
  BuyButton,
  LowerTab,
} from './styles';

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
  const { title, description, image, price } = item;
  return (
    <Card>
      <CardImage src={image} />
      <PriceTag>
        {`US$ ${price}`}
      </PriceTag>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <LowerTab>
        <BuyButton>Buy!</BuyButton>
      </LowerTab>
    </Card>
  );
};
export default SaleCard;
