import styled from "styled-components";

type BannerProps = {
  bgImage: string;
};

export const BannerImage = styled.div<BannerProps>`
  width: 100%;
  height: 280px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${(props) => props.theme.colors.white};
  padding: 32px 0;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Category = styled.span`
  font-size: 32px;
  font-weight: 100;
  opacity: 0.8;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
`;
