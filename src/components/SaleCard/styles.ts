import styled, { css } from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  width: 10rem;
  border-radius: 1rem;
  border: 2px solid #b0b0b0;
  background-color: #f0f0f0;
  overflow: hidden;
  align-items: center;
  padding: 1rem;
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

export const CardDescription = styled.p`
  display: block;
  overflow: hidden;
  font-size: 0.75rem;
`;
