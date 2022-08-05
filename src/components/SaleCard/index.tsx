import React from 'react';
import { useNavigate } from 'react-router';
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
  const { id, title, description, image, price } = item;
  const navigator = useNavigate();
  const goToItemPage: () => void = () => {
    navigator(`product/${id}`);
  };
  return (
    <Card>
      <CardImage src={image} />
      <PriceTag>{`US$ ${price}`}</PriceTag>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <LowerTab>
        <BuyButton onClick={goToItemPage}>Buy!</BuyButton>
      </LowerTab>
    </Card>
  );
};
export default SaleCard;
