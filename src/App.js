import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
