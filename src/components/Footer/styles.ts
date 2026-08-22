import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;
`;

export const FooterText = styled.p`
  font-size: 10px;
  max-width: 480px;
  line-height: 12px;
  color: ${(props) => props.theme.colors.primary};
`;
