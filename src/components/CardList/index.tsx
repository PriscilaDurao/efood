import React from "react";
import { Card } from "../Card";
import { List } from "./styles";
import { restaurantsList } from "../../utils/list";

export const CardList: React.FC = () => (
  <div className="container">
    <List>
      {restaurantsList.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          rating={item.rating}
          infos={item.infos}
          description={item.description}
          image={item.image}
        />
      ))}
    </List>
  </div>
);
