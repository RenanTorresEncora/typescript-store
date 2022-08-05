import styled, { css } from 'styled-components';

export const ProductPage = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 80%;
  background-color: white;
  padding: 2rem;
  margin: 2rem;
  border-radius: 0.2rem;
  box-shadow: 0.25rem 0.25rem 0.5rem hsl(0, 0%, 70%);
`;

interface ImageProps {
  src: string;
}
export const ProductImage = styled.div`
  display: flex;
  height: 15rem;
  ${({ src }: ImageProps) => css`
    background-color: white;
    background-image: url('${src}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0.25rem 0.25rem 0.5rem hsl(0, 0%, 70%);
    border-radius: 0.3rem;
  `}
  aspect-ratio: 4/3;

`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30rem;

  & > * {
    margin-bottom: 1rem;
  }
`;

export const ProductTitle = styled.h2`
  display: flex;
  overflow: hidden;
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
export const ProductDescription = styled.p`
  display: flex;
  text-align: justify;
  overflow: auto;
  font-size: 0.8rem;
  font-weight: normal;
  color: #303030;
`;

export const ProductPriceTag = styled.h3`
  display: flex;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  align-items: center;
  font-size: 2rem;
  color: #000;
`;
