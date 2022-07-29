import styled, { css } from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  height: 20rem;
  width: 10rem;
  border-radius: 1rem;
  border: 2px solid #b0b0b0;
  background-color: #f0f0f0;
  overflow: hidden;
  align-items: center;
  padding: 1rem;
  position: relative;
`;

interface ImageProps {
  src: string;
}
export const CardImage = styled.div`
  display: flex;
  flex: 1 0 5rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  margin: 0.25rem;
  ${({ src }: ImageProps) => css`
    background-color: white;
    background-image: url('${src}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `}
  width: 100%;
  max-height: 5rem;
  max-width: 10rem;
`;
export const CardTitle = styled.h3`
  display: block;
  overflow: hidden;
  font-size: 1rem;
  height: 2.5rem;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  width: 100%;
  word-wrap: break-word;
`;

export const LowerTab = styled.div`
--tab-height: 2rem;
display: flex;
height: var(--tab-height);
align-items: center;
width: 100%;
justify-content: space-between;
padding-inline: 1rem;
position: absolute;
bottom: 0.15rem;
`;

export const CardDescription = styled.p`
--tab-height: 2rem;

  display: block;
  overflow-x: hidden;
  height: calc(10rem - var(--tab-height));
  font-size: 0.75rem;
`;

export const PriceTag = styled.div`
display: flex;
font-family: 'Courier New', Courier, monospace;
align-items: center;
font-size: 1rem;
color: #333;
`;

export const BuyButton = styled.button`
background-color: lightblue;
color: blue;
border: 2px solid darkblue;
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
&:active{
  transform: translateY(0rem);
  background-color: darkblue;
  color: white;
}
`;
