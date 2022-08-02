import styled from 'styled-components';

export const StyledContent = styled.div`
  background: linear-gradient(to bottom, #dedede, white);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
  margin-top: var(--header-height);
`;
export const SaleCardsContainer = styled.section`
  display: grid;
  grid-auto-flow: column;
  overflow-x: scroll;
  align-items: center;
  width: 80%;
  height: 22rem;
  padding-inline: 5%;
  gap: 1rem;
`;
