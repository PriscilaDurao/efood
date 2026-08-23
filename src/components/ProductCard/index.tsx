import React from "react";
import { MenuItem } from "../../utils/list";
import { CardContainer, Title, Description, AddButton } from "./styles";

type Props = {
  item: MenuItem;
};

export const ProductCard: React.FC<Props> = ({ item }) => {
  return (
    <CardContainer>
      <img src={item.foto} alt={item.nome} />
      <Title>{item.nome}</Title>
      <Description>{item.descricao}</Description>
      <AddButton>Adicionar ao carrinho</AddButton>
    </CardContainer>
  );
};
