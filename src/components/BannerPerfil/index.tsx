import React from "react";
import { BannerImage, Category, Title } from "./styles";

type Props = {
  category: string;
  title: string;
  coverImage: string;
};

export const BannerPerfil: React.FC<Props> = ({
  category,
  title,
  coverImage,
}) => (
  <BannerImage bgImage={coverImage}>
    <div className="container">
      <Category>{category}</Category>
      <Title>{title}</Title>
    </div>
  </BannerImage>
);
