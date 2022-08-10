import styled from 'styled-components';
import cartIcon from '../../assets/svg/cart-icon.svg';

export const StyledHeader = styled.header`
  background-color: white;
  box-shadow: 0rem 0rem 0.5rem #555;
  padding: 1rem;
  z-index: 100;
  width: 100%;
  height: var(--header-height);
  top: 0;
  position: fixed;
`;

export const CartButton = styled.button`
  height: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: darkblue;
  background-image: url(${cartIcon});
  background-size: 1.75rem;
  background-repeat: no-repeat;
  background-position: center;
  transform: scale(1);
  transition: border, transform, 250ms;
  position: absolute;
  top: calc(var(--header-height) / 2 - 1.5rem);
  right: 2rem;

  &:hover {
    border-color: lightblue;
    transform: scale(1.15);
  }
`;

export const Title = styled.h1`
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Segoe UI', sans-serif;
  text-transform: uppercase;
  --blue: #029;
  --stripe-size: 5%;
  background: -webkit-linear-gradient(
      270deg,
      var(--blue),
      var(--blue) 50%,
      transparent 50%
    ),
    -webkit-repeating-linear-gradient(90deg, transparent, transparent
          var(--stripe-size), lightblue var(--stripe-size), var(--blue)
          calc(var(--stripe-size) * 2));
  -webkit-text-stroke: var(--blue) 1px;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 6px 6px rgba(black, 0.4);
  @media screen and (max-width: 900px) {
    font-size : 2rem;
  }
`;

export const SubTitle = styled.h3`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: flex;
  justify-content: center;
  font-style: italic;
  color: gray;
`;
