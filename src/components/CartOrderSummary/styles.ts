import styled from 'styled-components';

export const StyledCartOrderSummary = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  margin-bottom: 0.75rem;
  max-height: 8rem;
  width: 50%;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 2px 2px 5px #777;
  align-items: center;
  justify-content: center;
`;

export const OrderText = styled.p`
  display: flex;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-inline: 1rem;
`;
