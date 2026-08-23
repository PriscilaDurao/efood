import styled from "styled-components";
import heroBg from "../../assets/images/fndo_hero.png";

export const HeaderContainer = styled.header`
  background-image: url(${heroBg});
  background-repeat: repeat;
  background-size: cover;
  padding: 40px 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a,
  span {
    font-size: 18px;
    font-weight: 900;
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;
