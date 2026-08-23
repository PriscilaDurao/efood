import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

export const CartContainer = styled.aside`
  background-color: #e66767;
  z-index: 11;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
  }
`;

export const CartItem = styled.li`
  background-color: #ffebd9;
  padding: 8px;
  position: relative;
  display: flex;
  gap: 8px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    color: #e66767;
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    color: #e66767;
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffebd9;
  font-weight: bold;
  font-size: 14px;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const CheckoutButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  width: 100%;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
