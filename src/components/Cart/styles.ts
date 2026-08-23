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
  overflow-y: auto;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
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

export const Button = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  width: 100%;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const FormTitle = styled.h3`
  color: #ffebd9;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
`;

export const InputGroup = styled.div<{ maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  flex: 1;
  max-width: ${(props) => props.maxWidth || "auto"};

  label {
    color: #ffebd9;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  input {
    background-color: #ffebd9;
    border: 1px solid #ffebd9;
    height: 32px;
    padding: 0 8px;
    color: #4b4b4b;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
  }
`;

export const ConfirmationContainer = styled.div`
  color: #ffebd9;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`;
