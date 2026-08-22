import React from "react";
import {
  CardContainer,
  CardImage,
  TagContainer,
  Tag,
  Content,
  HeaderCard,
  Description,
  Button,
} from "./styles";
import star from "../../assets/icons/star.svg";

type Props = {
  title: string;
  rating: number;
  description: string;
  image: string;
  infos?: string[];
};

export const Card: React.FC<Props> = ({
  title,
  rating,
  description,
  image,
  infos,
}) => (
  <CardContainer>
    <CardImage src={image} alt={title} />
    <TagContainer>
      {infos?.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagContainer>
    <Content>
      <HeaderCard>
        <h3>{title}</h3>
        <div>
          <span>{rating}</span>
          <img src={star} alt="Estrela de avaliação" />
        </div>
      </HeaderCard>
      <Description>{description}</Description>
      <Button>Saiba mais</Button>
    </Content>
  </CardContainer>
);
