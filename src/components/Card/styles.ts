import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid ${(props) => props.theme.colors.primary};
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
`;

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  flex: 1;
`;

export const Button = styled.span`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
`;
