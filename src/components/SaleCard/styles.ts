import styled, { css } from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 20rem;
  width: 10rem;
  border-radius: 3px;
  border: 1px solid hsl(0, 0%, 75%);
  background-color: white;
  overflow: hidden;
  align-items: center;
  position: relative;
`;

interface ImageProps {
  src: string;
}
export const CardImage = styled.div`
  display: flex;
  flex: 1 0 8rem;
  border-bottom: 1px solid hsl(0, 0%, 75%);
  margin-bottom: 0.5rem;
  ${({ src }: ImageProps) => css`
    background-color: white;
    background-image: url('${src}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `}
  width: 100%;
`;

export const PriceTag = styled.div`
  display: flex;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  align-items: center;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.25rem;
`;

export const CardTitle = styled.h3`
  display: flex;
  overflow: hidden;
  font-size: 0.8rem;
  font-weight: normal;
  flex: 1 0 auto;
  text-transform: uppercase;
  text-overflow: ellipsis;
  width: 100%;
  padding-inline: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const LowerTab = styled.div`
  --tab-height: 2rem;
  display: flex;
  height: var(--tab-height);
  align-items: center;
  width: 100%;
  justify-content: center;
  padding-inline: 1rem;
  position: relative;
  margin: 0.25rem;
  bottom: 0.15rem;
`;

export const CardDescription = styled.p`
  --tab-height: 2rem;
  color: hsl(0, 0%, 50%);
  padding-inline: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  overflow-x: hidden;
  height: calc(10rem - var(--tab-height));
  font-size: 0.75rem;
  position: relative;
`;

export const BuyButton = styled.button`
  background-color: lightblue;
  color: darkblue;
  border: 1px solid darkblue;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color, transform 150ms;
  &:hover {
    transform: translateY(-0.15rem);
    background-color: darkblue;
    color: lightblue;
  }
  &:active {
    transform: translateY(0rem);
    background-color: darkblue;
    color: white;
  }
`;
