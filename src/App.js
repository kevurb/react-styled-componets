import React from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
function App() {
  {console.log(temaClaro, temaOscuro);}
  return (
    <ThemeProvider theme={temaOscuro}>
      <GlobalStyle />
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
