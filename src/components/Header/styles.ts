import styled from "styled-components";
import heroBg from "../../assets/images/fndo_hero.png";

export const HeaderBar = styled.header`
  background-image: url(${heroBg});
  background-repeat: repeat;
  background-size: cover;
  padding: 40px 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  max-width: 540px;
  margin-top: 138px;
  line-height: 42px;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 60px;
    line-height: 34px;
  }
`;
