import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderPerfil } from "../../components/HeaderPerfil";
import { BannerPerfil } from "../../components/BannerPerfil";
import { ProductList } from "../../components/ProductList";
import { Footer } from "../../components/Footer";
import { Restaurant } from "../../types";

export const Perfil: React.FC = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro na requisição AJAX do perfil:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading || !restaurant) {
    return (
      <p style={{ textAlign: "center", padding: "50px" }}>Carregando...</p>
    );
  }

  return (
    <>
      <HeaderPerfil />
      <BannerPerfil
        category={restaurant.tipo}
        title={restaurant.titulo}
        coverImage={restaurant.capa}
      />
      <ProductList items={restaurant.cardapio} />
      <Footer />
    </>
  );
};
