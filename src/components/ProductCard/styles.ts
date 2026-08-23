import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 8px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
  color: ${(props) => props.theme.colors.white};
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex: 1;
  color: ${(props) => props.theme.colors.white};
`;

export const AddButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  cursor: pointer;
  width: 100%;
`;
