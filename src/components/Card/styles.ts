import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`;

export const TagList = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  background-color: #e66767;
  color: #ffebd9;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 10px;
`;

export const CardBody = styled.div`
  padding: 8px;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 18px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  background-color: #e66767;
  color: #ffebd9;
  border: none;
  padding: 4px 6px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
