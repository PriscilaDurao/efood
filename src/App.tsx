import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "./store";
import { AppRoutes } from "./routes";
import { Cart } from "./components/Cart";
import theme from "./styles/theme";
import { GlobalCss } from "./styles/global";

export const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <BrowserRouter>
        <AppRoutes />
        <Cart />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
