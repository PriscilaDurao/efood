import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, HeaderContent } from "./styles";
import logo from "../../assets/images/logo.png";

export const HeaderPerfil: React.FC = () => (
  <HeaderContainer>
    <div className="container">
      <HeaderContent>
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="efood" />
        <span>0 produto(s) no carrinho</span>
      </HeaderContent>
    </div>
  </HeaderContainer>
);
