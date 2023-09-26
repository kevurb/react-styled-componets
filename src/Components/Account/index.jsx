import React, { useState } from "react";
import { Icono, Boton, Box, Detalle, Saldo} from "../UI"
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import styled from "styled-components"


const IconMargin = styled(Icono)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <Icono src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Boton onClick={toggleHandler}>
        <Icono
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Boton>
    </Box>
  );
};

export default Account;
