import React from "react";
import { Link } from "react-router-dom";
import {
  CardContainer,
  Tag,
  TagList,
  CardBody,
  HeaderCard,
  Title,
  Rating,
  Description,
  Button,
} from "./styles";

type Props = {
  id: number;
  title: string;
  rating: number;
  infos: string[];
  description: string;
  image: string;
};

export const Card: React.FC<Props> = ({
  id,
  title,
  rating,
  infos,
  description,
  image,
}) => (
  <CardContainer>
    <img
      src={image}
      alt={title}
      style={{ width: "100%", height: "217px", objectFit: "cover" }}
    />
    <TagList>
      {infos.map((info, index) => (
        <Tag key={index}>{info}</Tag>
      ))}
    </TagList>

    <CardBody>
      <HeaderCard>
        <Title>{title}</Title>
        <Rating>
          <span>{rating}</span>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 0L13.5826 6.24587L20.4795 7.24743L15.4898 12.1101L16.6672 18.9776L10.5 15.735L4.33282 18.9776L5.51025 12.1101L0.520477 7.24743L7.41743 6.24587L10.5 0Z"
              fill="#FFB930"
            />
          </svg>
        </Rating>
      </HeaderCard>
      <Description>{description}</Description>
      <Link to={`/perfil/${id}`}>
        <Button>Saiba mais</Button>
      </Link>
    </CardBody>
  </CardContainer>
);

export default Card;
