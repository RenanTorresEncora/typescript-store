import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneProduct } from '../../api/APIFunctions';
import { SaleItemType } from '../../components/SaleCard';
import { BuyButton } from '../../components/SaleCard/styles';
import { CartContext, CartItemDetails } from '../../contexts/CartContext';
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
  const { setCartState } = useContext(CartContext);
  const [product, setProduct] = useState<SaleItemType>();
  useEffect(() => {
    getOneProduct(id as string).then((data) => setProduct(data as SaleItemType));
  }, [id]);

  const addProductToCart = () => {
    setCartState((prev) => ({
      ...prev,
      products: [...prev.products, { product, quantity: 1 } as CartItemDetails],
    }));
  };

  return (
    <ProductPage>
      {product && (
        <>
          <ProductImage src={product.image} />
          <ProductDetails>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPriceTag>{`US$ ${product.price}`}</ProductPriceTag>
            <ProductDescription>{product.description}</ProductDescription>
            <BuyButton
              type="button"
              onClick={() => {
                changePageTo('/cart/7');
                addProductToCart();
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
