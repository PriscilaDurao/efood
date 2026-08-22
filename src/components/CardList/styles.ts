import styled from "styled-components";

export const List = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`;
