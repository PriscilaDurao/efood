import React, { useState } from "react";
import { MenuItem } from "../../types";
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

  const formattedPrice = item.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

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
          Adicionar ao carrinho
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
              <button type="button" onClick={() => setModalOpen(false)}>
                Adicionar ao carrinho - {formattedPrice}
              </button>
            </ModalDetails>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
