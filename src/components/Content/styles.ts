import styled from 'styled-components';

export const StyledContent = styled.div`
  background-color: #dedede;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`;
export const SaleCardsContainer = styled.section`
  display: grid;
  grid-auto-flow: column;
  overflow-x: auto;
  align-items: center;
  width: 80%;
  height: 22rem;
  padding-inline: 5%;
  gap: 1rem;

  &:before {
    position: absolute;
    content: '';
    background: linear-gradient(90deg, #dedede, transparent);
    height: 100%;
    width: 10%;
    left: 10%;
    z-index: 10;
  }
  &:after {
    position: absolute;
    content: '';
    background: linear-gradient(270deg, #dedede, transparent);
    height: 100%;
    width: 10%;
    right: 10%;
  }
`;
