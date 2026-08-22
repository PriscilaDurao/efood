import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/GlobalStyle";

const HeaderPerfil = styled.header`
  background-color: ${colors.begeClaro};
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Perfil = () => (
  <>
    <HeaderPerfil>
      <Link to="/" style={{ color: colors.rosa, fontWeight: "bold" }}>
        Restaurantes
      </Link>
      <h1>efood</h1>
      <span>0 produto(s) no carrinho</span>
    </HeaderPerfil>
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Cardápio do Restaurante</h2>
    </div>
  </>
);

export default Perfil;
