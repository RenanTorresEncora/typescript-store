import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneProduct } from '../../api/APIFunctions';
import { SaleItemType } from '../../components/SaleCard';
import { BuyButton } from '../../components/SaleCard/styles';
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
  const [product, setProduct] = useState<SaleItemType>();
  useEffect(() => {
    getOneProduct(id as string).then((data) => setProduct(data as SaleItemType));
  }, [id]);

  return (
    <ProductPage>
      {product && (
        <>
          <ProductImage src={product.image} />
          <ProductDetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPriceTag>{`US$ ${product.price}`}</ProductPriceTag>
            <ProductDescription>{product.description}</ProductDescription>
            <BuyButton type="button" onClick={() => changePageTo('/')}>
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
