import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { List } from "./styles";
import { Restaurant } from "../../types";

export const CardList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro na requisição AJAX:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p style={{ textAlign: "center", padding: "50px" }}>Carregando...</p>
    );
  }

  return (
    <div className="container">
      <List>
        {restaurants.map((item) => {
          const infos: string[] = [];
          if (item.destacado) infos.push("Destaque da semana");
          if (item.tipo) infos.push(item.tipo);

          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.titulo}
              rating={item.avaliacao}
              infos={infos}
              description={item.descricao}
              image={item.capa}
            />
          );
        })}
      </List>
    </div>
  );
};
