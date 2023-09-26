import react from "react";
import { Box } from "../UI";
import {lista } from "../../info"
import styled from "styled-components";
import { Boton } from "../UI";
import Card from "../Card";



const List = () => {
    // console.log(lista);
    return <Box> 
        {
            lista.cargos.map(  (cargo, i)=> {
              return  <Card key={i} cargo = {cargo}> 
                  

                </Card>
            })
        }
        <Boton>Ver Mas </Boton>
    </Box>
}

export default List;