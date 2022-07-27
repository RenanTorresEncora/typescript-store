import styled, { css } from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  width: 10rem;
  border-radius: 1rem;
  border: 2px solid #b0fefe;
  background-color: #f0fefe;
  overflow: hidden;
  align-items: center;
  padding: 1rem;
`;

interface ImageProps {
  src: string;
}
export const CardImage = styled.div`
  display: flex;
  flex: 1 0 200px;
  ${({ src }: ImageProps) => css`
    background-image: url('${src}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `}
  
  height: 100px;
  width: 100px;
`;
export const CardTitle = styled.h3`
font-size: 1rem;
word-wrap: break-word;
`;

export const CardDescription = styled.p`
font-size:0.75rem`;
