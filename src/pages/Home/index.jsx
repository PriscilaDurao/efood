import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/GlobalStyle";

const HeaderHome = styled.header`
  background-color: ${colors.begeClaro};
  padding: 40px 0;
  text-align: center;
`;

const Home = () => (
  <>
    <HeaderHome>
      <h1>efood</h1>
      <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
    </HeaderHome>
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h3>Lista de Restaurantes</h3>
      <br />
      <Link to="/perfil" style={{ color: colors.rosa, fontWeight: "bold" }}>
        Ir para página do Restaurante (Perfil)
      </Link>
    </div>
  </>
);

export default Home;
