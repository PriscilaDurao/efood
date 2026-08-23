import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { open } from "../../store/reducers/cart";
import { HeaderContainer, HeaderContent } from "./styles";
import logo from "../../assets/images/logo.png";

export const HeaderPerfil: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="efood" />
          <span style={{ cursor: "pointer" }} onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </span>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};
