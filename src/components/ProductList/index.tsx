import React from "react";
import { MenuItem } from "../../utils/list";
import { ProductCard } from "../ProductCard";
import { Grid } from "./styles";

type Props = {
  items: MenuItem[];
};

export const ProductList: React.FC<Props> = ({ items }) => (
  <div className="container">
    <Grid>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Grid>
  </div>
);
