import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 8px;
  display: flex;
  flex-direction: column;

  > img {
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 101;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 32px;
  display: flex;
  gap: 24px;
  max-width: 1024px;
  width: 90%;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;

    > img {
      width: 100%;
      height: 180px;
    }
  }
`;

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 8px;
    cursor: pointer;
    align-self: flex-start;
  }
`;
