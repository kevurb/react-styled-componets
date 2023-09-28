import alimentacion from "./assets/images/alimentacion.svg"
import utilidades from "./assets/images/utilidades.svg"
import salud from "./assets/images/salud.svg"
import transporte from "./assets/images/transporte.svg"
import otros from "./assets/images/otros.svg"
import { IconoTema, IconoTemaTema} from "./Components/UI"
import React from "react";
export default (type)=>{
    // console.log(type)
    const Images = {
        default: <IconoTema src={otros} alt="otros"></IconoTema> ,
        Restaurante: <IconoTema src={alimentacion} alt="alimentacion"></IconoTema> ,
        Utilidades:<IconoTema src={utilidades} alt="utilidades"></IconoTema>,
        Otros : <IconoTema src={otros} alt="otros"></IconoTema>,
        Salud: <IconoTema src={salud} alt="salud"></IconoTema>,
        Transporte: <IconoTema src={transporte} alt ="transporte" ></IconoTema>,


    };
    return Images[type] || Images ["default"]; 
};