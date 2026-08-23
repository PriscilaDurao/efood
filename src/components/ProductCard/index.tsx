import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MenuItem } from "../../types";
import { add, open } from "../../store/reducers/cart";
import {
  CardContainer,
  Title,
  Description,
  AddButton,
  Modal,
  ModalContent,
  ModalDetails,
} from "./styles";

type Props = {
  item: MenuItem;
};

export const ProductCard: React.FC<Props> = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const formattedPrice = item.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleAddToCart = () => {
    dispatch(add(item));
    dispatch(open());
    setModalOpen(false);
  };

  return (
    <>
      <CardContainer>
        <img src={item.foto} alt={item.nome} />
        <Title>{item.nome}</Title>
        <Description>
          {item.descricao.length > 120
            ? item.descricao.slice(0, 117) + "..."
            : item.descricao}
        </Description>
        <AddButton type="button" onClick={() => setModalOpen(true)}>
          Mais detalhes
        </AddButton>
      </CardContainer>

      {modalOpen && (
        <Modal>
          <div className="overlay" onClick={() => setModalOpen(false)} />
          <ModalContent>
            <button
              className="close-btn"
              type="button"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
            <img src={item.foto} alt={item.nome} />
            <ModalDetails>
              <div>
                <h4>{item.nome}</h4>
                <p>{item.descricao}</p>
                <p>Serve: {item.porcao}</p>
              </div>
              <button type="button" onClick={handleAddToCart}>
                Adicionar ao carrinho - {formattedPrice}
              </button>
            </ModalDetails>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
