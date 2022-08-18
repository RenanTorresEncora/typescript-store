import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneProduct } from '../../api/APIFunctions';
import {
  AmountText,
  AmountContainer,
  MinusButton,
  PlusButton,
} from '../../components/CartItem/styles';
import { SaleItemType } from '../../components/SaleCard';
import { BuyButton } from '../../components/SaleCard/styles';
import { CartContext } from '../../contexts/CartContext';
import {
  ProductDescription,
  ProductDetails,
  ProductImage,
  ProductPage,
  ProductPriceTag,
  ProductTitle,
} from './styles';

const Product: React.FC = () => {
  const { id } = useParams<string>();
  const changePageTo = useNavigate();
  const { addProductToCart } = useContext(CartContext);
  const [product, setProduct] = useState<SaleItemType>();
  const [productAmount, setProductAmount] = useState<number>(1);
  useEffect(() => {
    getOneProduct(id as string).then((data) => setProduct(data as SaleItemType));
  }, [id]);

  const increaseAmount = () => setProductAmount((prev) => (prev > 1 ? prev - 1 : 1));
  const decreaseAmount = () => setProductAmount((prev) => (prev < 10 ? prev + 1 : 10));
  return (
    <ProductPage>
      {product && (
        <>
          <ProductImage src={product.image} />
          <ProductDetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPriceTag>{`US$ ${product.price}`}</ProductPriceTag>
            <ProductDescription>{product.description}</ProductDescription>
            <AmountContainer>
              <MinusButton onClick={increaseAmount}>-</MinusButton>
              <AmountText>{`Amount: ${productAmount}`}</AmountText>
              <PlusButton onClick={decreaseAmount}>+</PlusButton>
            </AmountContainer>
            <BuyButton
              type="button"
              onClick={() => {
                addProductToCart({ product, quantity: productAmount });
                changePageTo('/cart/');
              }}
            >
              Add to cart
            </BuyButton>
            <BuyButton type="button" onClick={() => changePageTo('/')}>
              Go back
            </BuyButton>
          </ProductDetails>
        </>
      )}
    </ProductPage>
  );
};

export default Product;
