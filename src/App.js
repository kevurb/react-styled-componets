import React, {useState} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import { BotonTheme } from "./Components/UI";
import SwitchTema from "./Components/SwitchTema";
function App() {
  const [tema,setTema]= useState(true)
  const toogleTema = () =>{
    setTema((tema)=>!tema)
  }
  //{console.log(temaClaro, temaOscuro);}
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <Header />
      <BotonTheme onClick={toogleTema}> 
        <SwitchTema tema={tema} ></SwitchTema>
        </BotonTheme>
      <Container />
    </ThemeProvider>
  );
}

export default App;
