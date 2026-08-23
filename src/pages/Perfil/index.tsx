import React from "react";
import { useParams } from "react-router-dom";
import { HeaderPerfil } from "../../components/HeaderPerfil";
import { BannerPerfil } from "../../components/BannerPerfil";
import { ProductList } from "../../components/ProductList";
import { Footer } from "../../components/Footer";
import { restaurantsList } from "../../utils/list";
import massaImg from "../../assets/images/massa.png";

export const Perfil: React.FC = () => {
  const { id } = useParams();
  const restaurant =
    restaurantsList.find((r) => r.id === Number(id)) || restaurantsList[1];

  return (
    <>
      <HeaderPerfil />
      <BannerPerfil
        category={restaurant.tipo}
        title={restaurant.title}
        coverImage={massaImg}
      />
      <ProductList items={restaurant.cardapio} />
      <Footer />
    </>
  );
};
